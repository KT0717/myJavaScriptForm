// let search = document.getElementById('search');
var zipcodeInput = document.getElementById('zipcode-input');
var yourAddress = document.getElementById('your-address');
var yourAddressErrMsg = yourAddress.getElementsByClassName('err-msg')[0];

zipcodeInput.addEventListener('input', ()=>{
  let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
  let zipError = document.getElementById('zip-error');
  let address1 = document.getElementById('address1');
  let address2 = document.getElementById('address2');
  let address3 = document.getElementById('address3');
  let param = zipcodeInput.value.replace('-', '');
  
  if (zipcodeInput.value.length < 7) {
    zipError.innerHTML = '';
    address1.value = '';
    address2.value = '';
    address3.value = '';
    address3.disabled = true;
    yourAddressErrMsg.classList.add('d-none');
  }
  if (zipcodeInput.value.length > 7) {
    zipError.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>７桁を超えないよう';
    zipError.classList.remove('d-none');
    zipError.previousElementSibling.classList.remove('mb-2');
  }
  if (zipcodeInput.value.match(/[-ー]/g)) {
    zipError.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>ハイフンは必要ありません';
    zipError.classList.remove('d-none');
    zipError.previousElementSibling.classList.remove('mb-2');
  }

  zipcodeInput.value = zipcodeInput.value.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g, function(s){
    return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
  });

  if (zipcodeInput.value.length === 7) {
    let url = api + param;
    fetchJsonp(url, {
      timeout: 10000, //タイムアウト時間
    })
      .then((response)=>{
        zipError.innerHTML = ''; //HTML側のエラーメッセージ初期化
        return response.json();
      })
      .then((data)=>{
        if(data.status === 400){ //エラー時
          zipError.innerHTML = data.message;
          zipError.classList.remove('d-none');
          zipError.previousElementSibling.classList.remove('mb-2');
          address3.classList.add('false');
        } else if (data.results === null){
          zipError.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>郵便番号から住所が見つかりませんでした';
          zipError.classList.remove('d-none');
          zipError.previousElementSibling.classList.remove('mb-2');
          address3.classList.add('false');
        } else {
          let pref = data.results[0].address1;
          let city = data.results[0].address2;
          let town = data.results[0].address3;
          address1.value = pref;
          address2.value = city + town;
          address3.disabled = false;
          address3.focus();
          zipcodeInput.classList.add('true');
        }
      })
      .catch((ex)=>{ //例外処理
        console.log(ex);
      });
  }
}, false);
