let search = document.getElementById('search');
search.addEventListener('click', ()=>{
  let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
  let zipError = document.getElementById('zip-error');
  let zipcodeInput = document.getElementById('zipcode-input');
  let address1 = document.getElementById('address1');
  let address2 = document.getElementById('address2');
  let param = zipcodeInput.value.replace('-',''); //入力された郵便番号から「-」を削除
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
      }else if(data.results === null){
        zipError.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>郵便番号から住所が見つかりませんでした';
      } else {
        let pref = data.results[0].address1;
        let city = data.results[0].address2;
        let town = data.results[0].address3;
        address1.value = pref;
        address2.value = city + town;
      }
    })
    .catch((ex)=>{ //例外処理
      console.log(ex);
    });
}, false);
