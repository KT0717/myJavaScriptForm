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
// 住所セクション
var yourAddress = document.getElementById('your-address');
var yourAddressZip = document.getElementById('zipcode-input');
var yourAddressThird = document.getElementById('address3');
// パスワードセクション
var yourPass = document.getElementById('your-pass');
var yourEmail = document.getElementById('your-email');
var yourMembers = document.getElementById('your-members');
var yourTel = document.getElementById('your-tel');
var mSex = document.getElementById('msex');
var fSex = document.getElementById('fsex');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateName(yourFirstName, yourLastName)) {
    //
  }
  if (validationBirthday(yourYear, yourMonth, yourDay)) {
    //
  }
  // if (validationPass(yourPass)) {
  //   //
  // }
  // if (validateEmail(yourEmail)) {
  //   //
  // }
  if (validSex(mSex, fSex)) {
    //
  }
  if (validationAddress(yourAddressZip, yourAddressThird)) {
    //
  }
  // if (validTel(yourTel)) {
  //   //
  // }
  // if (emptyCheck(yourName, yourPass, yourEmail, yourTel, yourMembers)) {
  //   //
  // }
  return false;
});

// 未入力確認
function emptyCheck(...args) {
  for (let i = 0; i < args.length; i = (i + 1) | 0) {
    if (args[i].value === '') {
      args[i].nextElementSibling.innerHTML = '必須項目です';
      args[i].nextElementSibling.classList.remove('d-none');
      if (args[i].nextElementSibling.nextElementSibling !== null) {
        args[i].nextElementSibling.nextElementSibling.classList.add('d-none');
        args[i].addEventListener('input', inputChange);
      }
    }
  }
  return true;
}

// 名前確認
function validateName(yourFirstName, yourLastName) {
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
function validationBirthday(yourYear, yourMonth, yourDay) {
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
function validSex(mSex, fSex) {
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
  }
  else {
    yourGenderErrMsg.classList.remove('d-none');
    yourGenderErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>どちらかを選択してください</span>';
    if (mSex.value !== null) {
      mSex.addEventListener('input', inputChange);
    }
    if (fSex.value !== null) {
      fSex.addEventListener('input', inputChange);
    }
    return false;
  }
}

// 住所
function validationAddress(yourAddressZip, yourAddressThird) {
  var yourAddressErrMsg = yourAddress.getElementsByClassName('err-msg')[0];
  function inputChange() {
    yourAddressErrMsg.classList.add('d-none');
  }

  // 郵便番号が未入力だったら
  if (yourAddressZip.value === '') {
    yourAddressErrMsg.classList.remove('d-none');
    yourAddressErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>郵便番号を入力してください</span>';
    if (yourAddressZip.value !== null) {
      yourAddressZip.addEventListener('input', inputChange);
    }
    return true;
  }
  // 番地以降が未入力だったら
  if (yourAddressThird.value === '') {
    yourAddressErrMsg.classList.remove('d-none');
    yourAddressErrMsg.innerHTML = '<span class="text-danger"><i class="fas fa-exclamation-circle mr-1"></i>番地以降 ビル･マンション名を入力してください</span>';
    if (yourAddressThird.value !== null) {
      yourAddressThird.addEventListener('input', inputChange);
    }
    return true;
  }
  else if (yourAddressZip.value !== '' && yourAddressThird.value !== '') {
    yourAddressErrMsg.classList.remove('d-none');
    yourAddressErrMsg.innerHTML = '<span class="text-success"><i class="fas fa-check mr-1"></i>OK</span>';
    return true;
  }
  return false;
}

// パスワード
function validationPass(val) {
  var passformat = /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/;
  if (val.value.match(passformat)) {
    errMsg(val, true);
    return true;
  } else {
    errMsg(val, false);
    return false;
  }
}

// メール確認
function validateEmail(val) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (val.value.match(mailformat)) {
    errMsg(val, true);
    return true;
  } else {
    errMsg(val, false);
    return false;
  }
}

// 電話番号確認（libphonenumber 使用）
var validateTelNeo = function (value) {
  return /^[0０]/.test(value) && libphonenumber.isValidNumber(value, 'JP');
};

var formatTel = function (value) {
  return new libphonenumber.AsYouType('JP').input(value);
};

function validTel(tel) {
  var ttt = tel.value;
  if (validateTelNeo(ttt)) {
    var formattedTel = formatTel(ttt);
    errMsg(tel, true);
    tel.value = formattedTel;
    return true;
  } else {
    errMsg(tel, false);
    return false;
  }
}



// エラーメッセージ
function errMsg(params, flag) {
  function removeDnone(params) {
    params.nextElementSibling.classList.remove('d-none');
    if (params.nextElementSibling.nextElementSibling !== null) {
      params.nextElementSibling.nextElementSibling.classList.add('d-none');
    }
  }
  if (flag == true) {
    params.nextElementSibling.innerHTML = '<span class="text-success">OK<i class="fas fa-check ml-1"></i></span>';
    removeDnone(params);
  } else if (flag == false && params == yourName) {
    params.nextElementSibling.innerHTML = 'お名前は 1 文字以上で入力してください';
    removeDnone(params);
  } else if (flag == false && params == yourPass) {
    params.nextElementSibling.innerHTML = 'パスワードは半角英数字 8 文字以上で入力してください';
    if (params.nextElementSibling.nextElementSibling !== null) {
      params.nextElementSibling.nextElementSibling.classList.add('d-none');
    }
    removeDnone(params);
  } else if (flag == false && params == yourEmail) {
    params.nextElementSibling.innerHTML = 'メールの形式が正しくありません';
    removeDnone(params);
  } else if (flag == false && params == yourGender) {
    params.nextElementSibling.innerHTML = 'どちらかを選択してください';
    removeDnone(params);
  } else if (flag == false && params == yourTel) {
    params.nextElementSibling.innerHTML = '電話番号の形式が正しくありません';
    removeDnone(params);
  } else if (flag == false && params == yourMembers) {
    params.nextElementSibling.innerHTML = '数字で入力してください';
    removeDnone(params);
  }
}
