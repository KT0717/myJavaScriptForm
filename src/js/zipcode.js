// let search = document.getElementById('search');
var zipcodeInput = document.getElementById('zipcode-input');

zipcodeInput.addEventListener('input', ()=>{
  let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
  let zipError = document.getElementById('zip-error');
  let address1 = document.getElementById('address1');
  let address2 = document.getElementById('address2');
  let address3 = document.getElementById('address3');
  let param = zipcodeInput.value.replace('-', '');

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
        } else if (data.results === null){
          zipError.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>郵便番号から住所が見つかりませんでした';
          zipError.classList.remove('d-none');
          zipError.previousElementSibling.classList.remove('mb-2');
        } else {
          let pref = data.results[0].address1;
          let city = data.results[0].address2;
          let town = data.results[0].address3;
          address1.value = pref;
          address2.value = city + town;
          address3.focus();
        }
      })
      .catch((ex)=>{ //例外処理
        console.log(ex);
      });
  }

  if (zipcodeInput.value.length < 7) {
    address1.value = '';
    address2.value = '';
    zipError.innerHTML = '';
    zipError.classList.add('d-none');
    zipError.previousElementSibling.classList.add('mb-2');
  }

  if (zipcodeInput.value.length > 7) {
    zipError.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>７桁を超えています';
  }

}, false);
