var form = document.getElementById('form');
// 名前セクション
var yourName = document.getElementById('your-name');
var yourFirstName = document.getElementById('your-first-name');
var yourLastName = document.getElementById('your-last-name');
// 生年月日セクション
var yourBirthday = document.getElementById('your-birthday');
var yourYear = document.getElementById('your-year');
var yourMonth = document.getElementById('your-month');
var yourDay = document.getElementById('your-day');
// 性別セクション
var yourGender = document.getElementById('your-gender');
var mSex = document.getElementById('msex');
var fSex = document.getElementById('fsex');
// 住所セクション
// var yourAddress = document.getElementById('your-address');
// var zipcodeInput = document.getElementById('zipcode-input');
// var address3 = document.getElementById('address3');
// 電話番号セクション
// var yourTel = document.getElementById('your-tel');
// var yourTelNum = document.getElementById('your-tel-num');
// メールセクション
var yourEmail = document.getElementById('your-email');
var yourEmailInput = document.getElementById('your-email-input');
// パスワードセクション
var yourPass = document.getElementById('your-pass');
var yourPassInput1 = document.getElementById('your-pass-input1');
// プライバシーポリシーセクション
var yourPrivacy = document.getElementById('your-privacy');
var yourPrivacyInput = document.getElementById('your-privacy-input');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateName()) {
    //
    if (validationBirthday()) {
      //
      if (validSex()) {
        //
        if (validationAddress()) {
          //
          if (validTel()) {
            //
            if (validateEmail()) {
              //
              if (validationPass()) {
                //
                if (validationPrivacy()) {
                  //
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
});

function errMsgControl(category, errMsg, add) {
  category.addEventListener('input', function inputChange() {
    errMsg.classList.add('d-none');
    if (add !== false) {
      add.previousElementSibling.classList.add('mb-2');
    }
  });
}

// 名前確認
function validateName() {
  var yourNameErrMsg = yourName.getElementsByClassName('err-msg')[0];
  function inputChange() {
    yourNameErrMsg.classList.add('d-none');
  }
  if (yourFirstName.value === '' && yourLastName.value === '') {
    yourNameErrMsg.classList.remove('d-none');
    yourNameErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>氏名を入力してください</span>';
    if (yourFirstName.value !== null) {
      yourFirstName.addEventListener('input', inputChange);
    }
    return true;
  }
  else if (yourFirstName.value === '') {
    yourNameErrMsg.classList.remove('d-none');
    yourNameErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>性を入力してください</span>';
    if (yourFirstName.value !== null) {
      yourFirstName.addEventListener('input', inputChange);
    }
    return true;
  }
  else if (yourLastName.value === '') {
    yourNameErrMsg.classList.remove('d-none');
    yourNameErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>名を入力してください</span>';
    if (yourLastName.value !== null) {
      yourFirstName.addEventListener('input', inputChange);
    }
    return true;
  }
  else if (yourFirstName.value !== '' && yourLastName.value !== '') {
    yourNameErrMsg.classList.remove('d-none');
    yourNameErrMsg.innerHTML = '<span class="text-success"><i class="fas fa-check mr-1"></i>OK</span>';
    return true;
  }
  return false;
}

// 生年月日
function validationBirthday() {
  var yourBirthdayErrMsg = yourBirthday.getElementsByClassName('err-msg')[0];
  function inputChange() {
    yourBirthdayErrMsg.classList.add('d-none');
  }
  if (yourYear.value === '' && yourMonth.value === '' && yourDay.value === '') {
    yourBirthdayErrMsg.classList.remove('d-none');
    yourBirthdayErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>生年月日を選択してください</span>';
    if (yourYear.value !== null) {
      yourYear.addEventListener('input', inputChange);
    }
    if (yourMonth.value !== null) {
      yourMonth.addEventListener('input', inputChange);
    }
    if (yourDay.value !== null) {
      yourDay.addEventListener('input', inputChange);
    }
    return true;
  }
  else if (yourYear.value === '') {
    yourBirthdayErrMsg.classList.remove('d-none');
    yourBirthdayErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>年を選択してください</span>';
    return true;
  }
  else if (yourMonth.value === '') {
    yourBirthdayErrMsg.classList.remove('d-none');
    yourBirthdayErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>月を選択してください</span>';
    return true;
  }
  else if (yourDay.value === '') {
    yourBirthdayErrMsg.classList.remove('d-none');
    yourBirthdayErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>日を選択してください</span>';
    return true;
  }
  else if (yourYear.value !== '' && yourMonth.value !== '' && yourDay.value !== '') {
    yourBirthdayErrMsg.classList.remove('d-none');
    yourBirthdayErrMsg.innerHTML = '<span class="text-success"><i class="fas fa-check mr-1"></i>OK</span>';
    return true;
  }
  return false;
}

// 性別確認
function validSex() {
  var yourGenderErrMsg = yourGender.getElementsByClassName('err-msg')[0];
  function inputChange() {
    yourGenderErrMsg.classList.add('d-none');
  }
  var x = 0;
  if (mSex.checked) {
    x++;
  }
  if (fSex.checked) {
    x++;
  }
  if (!x == 0) {
    yourGenderErrMsg.classList.remove('d-none');
    yourGenderErrMsg.innerHTML = '<span class="text-success"><i class="fas fa-check mr-1"></i>OK</span>';
    return true;
  } else {
    yourGenderErrMsg.classList.remove('d-none');
    yourGenderErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>どちらかを選択してください</span>';
    if (mSex.value !== null) {
      mSex.addEventListener('input', inputChange);
      return true;
    }
    if (fSex.value !== null) {
      fSex.addEventListener('input', inputChange);
      return true;
    }
  }
  return false;
}

// 住所
function validationAddress() {
  var yourAddress = document.getElementById('your-address');
  var yourAddressErrMsg = yourAddress.getElementsByClassName('err-msg')[0];
  var zipcodeInput = document.getElementById('zipcode-input');
  let zipError = document.getElementById('zip-error');
  let address3 = document.getElementById('address3');

  // 入力を検知してエラーメッセージを非表示
  errMsgControl(zipcodeInput, zipError, zipError);
  errMsgControl(address3, yourAddressErrMsg, zipError);

  // 郵便番号が未入力だったら
  if (zipcodeInput.value === '') {
    zipError.classList.remove('d-none');
    zipError.previousElementSibling.classList.remove('mb-2');
    zipError.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>郵便番号を入力してください</span>';
    return true;
  }
  // ７桁入力されて番地以降が未入力だったら
  if (zipcodeInput.classList.contains('true') && address3.value === '') {
    yourAddressErrMsg.classList.remove('d-none');
    yourAddressErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>番地以降 ビル･マンション名を入力してください</span>';
    return true;
  }
  // 入力が正しければ
  if (zipcodeInput.classList.contains('true') && address3.value !== '') {
    yourAddressErrMsg.classList.remove('d-none');
    yourAddressErrMsg.innerHTML = '<span class="text-success"><i class="fas fa-check mr-1"></i>OK</span>';
    return true;
  }
  return true;
}

// 電話番号確認（libphonenumber 使用）
var validateTelLibphonenumber = function (value) {
  return /^[0０]/.test(value) && libphonenumber.isValidNumber(value, 'JP');
};

var formatTel = function (value) {
  return new libphonenumber.AsYouType('JP').input(value);
};

function validTel() {
  // 取得
  var yourTel = document.getElementById('your-tel');
  var yourTelNum = document.getElementById('your-tel-num');
  var yourTelErrMsg = yourTel.getElementsByClassName('err-msg')[0];
  // 入力を検知してエラーメッセージを非表示
  errMsgControl(yourTelNum, yourTelErrMsg, false);
  // 電話番号が未入力だったら
  if (yourTelNum.value === '')
  {
    yourTelErrMsg.classList.remove('d-none');
    yourTelErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>電話番号を入力してください</span>';
    return true;
  }
  // 入力値が正しくなければ
  if (!validateTelLibphonenumber(yourTelNum.value)) {
    yourTelErrMsg.classList.remove('d-none');
    yourTelErrMsg.innerHTML = '電話番号の形式が正しくありません';
    return true;
  }
  else if (yourTelNum.value === '00000000' || yourTelNum.value === '000000000') {
    yourTelErrMsg.classList.remove('d-none');
    yourTelErrMsg.innerHTML = '電話番号の形式が正しくありません';
    return true;
  }
  // 正しければ
  else {
    var formattedTel = formatTel(yourTelNum.value);
    yourTelNum.value = formattedTel;
    yourTelErrMsg.classList.remove('d-none');
    yourTelErrMsg.innerHTML = '<span class="text-success"><i class="fas fa-check mr-1"></i>OK</span>';
    return true;
  }
}

// メール確認
function validateEmail() {
  var yourEmailErrMsg = yourEmail.getElementsByClassName('err-msg')[0];
  function inputChange() {
    yourEmailErrMsg.classList.add('d-none');
  }
  if (yourEmailInput.value === '') {
    yourEmailErrMsg.classList.remove('d-none');
    yourEmailErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>メールアドレスを入力してください</span>';
    if (yourEmailInput.value !== null) {
      yourEmailInput.addEventListener('input', inputChange);
    }
    return true;
  }
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (yourEmailInput.value.match(mailformat)) {
    yourEmailErrMsg.classList.remove('d-none');
    yourEmailErrMsg.innerHTML = '<span class="text-success"><i class="fas fa-check mr-1"></i>OK</span>';
    return true;
  } else {
    yourEmailErrMsg.classList.remove('d-none');
    yourEmailErrMsg.innerHTML = 'メールの形式が正しくありません';
    return true;
  }
}

// パスワード
function validationPass() {
  var yourPassErrMsg = yourPass.getElementsByClassName('err-msg')[0];
  function inputChange() {
    yourPassErrMsg.classList.add('d-none');
    yourPassErrMsg.previousElementSibling.classList.remove('d-none');
  }
  if (yourPassInput1.value === '') {
    yourPassErrMsg.classList.remove('d-none');
    yourPassErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>パスワードを入力してください</span>';
    yourPassErrMsg.previousElementSibling.classList.add('d-none');
    if (yourPassInput1.value !== null) {
      yourPassInput1.addEventListener('input', inputChange);
    }
    return true;
  }
  var passformat = /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/;
  if (yourPassInput1.value.match(passformat)) {
    yourPassErrMsg.classList.remove('d-none');
    yourPassErrMsg.innerHTML = '<span class="text-success"><i class="fas fa-check mr-1"></i>OK</span>';
    return true;
  } else {
    yourPassErrMsg.classList.remove('d-none');
    yourPassErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>パスワードの形式が正しくありません';
    yourPassErrMsg.previousElementSibling.classList.add('d-none');
    return true;
  }
}

// プライバシーポリシー
function validationPrivacy() {
  var yourPrivacyErrMsg = yourPrivacy.getElementsByClassName('err-msg')[0];
  function inputChange() {
    yourPrivacyErrMsg.classList.add('d-none');
    yourPrivacyErrMsg.previousElementSibling.classList.add('mb-3');
  }

  yourPrivacyInput.addEventListener('input', inputChange);

  if (yourPrivacyInput.checked === false) {
    console.log(yourPrivacyInput.checked);
    yourPrivacyErrMsg.classList.remove('d-none');
    yourPrivacyErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>ボックスのチェックをお願いします</span>';
    yourPrivacyErrMsg.previousElementSibling.classList.remove('mb-3');
    return true;
  }
}
