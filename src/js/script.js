var form = document.getElementById('form');
var yourName = document.getElementById('your-name');
var yourEmail = document.getElementById('your-email');
var yourGender = document.getElementById('your-gender');
var yourMembers = document.getElementById('your-members');
var yourTel = document.getElementById('your-tel');
var mSex = document.getElementById('msex');
var fSex = document.getElementById('fsex');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateName(yourName)) {
    //
  }
  if (validateEmail(yourEmail)) {
    //
  }
  if (validSex(mSex, fSex)) {
    //
  }
  if (validateMember(yourMembers)) {
    //
  }
  if (validTel(yourTel)) {
    //
  }
  if (emptyCheck(yourName, yourEmail, yourTel, yourMembers)) {
    //
  }
  return false;
});

// 未入力確認
function emptyCheck(...args) {
  for (let i = 0; i < args.length; i = (i + 1) | 0) {
    if (args[i].value === '') {
      args[i].nextElementSibling.innerHTML = '必須項目です';
      args[i].nextElementSibling.classList.remove('d-none');
    }
  }
  return true;
}

// 名前確認
function validateName(val) {
  if (val.value.length >= 4) {
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

// 電話番号確認
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

// 性別確認
function validSex(mSex, fSex) {
  var x = 0;
  if (mSex.checked) {
    x++;
  }
  if (fSex.checked) {
    x++;
  }
  if (!x == 0) {
    errMsg(yourGender, true);
    return true;
  } else {
    errMsg(yourGender, false);
    yourGender.nextElementSibling.classList.remove('d-none');
    return false;
  }
}

// 参加人数確認
// 最小申し込み人数
var memberNumMin = 1;
// 最大申し込み人数
var memberNumMax = 10;

// const suppressZero1 = str => {
//   if (str.match(/^0+/)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

function validateMember(val) {
  var replaceVal = val.value;
  console.log(replaceVal);
  replaceVal = replaceVal.replace(/[０-９]/g,
    function( tmpStr ) {
      return String.fromCharCode( tmpStr.charCodeAt(0) - 0xFEE0 );
    }
  );
  console.log(replaceVal);
  if (replaceVal.match(/^0+/)) {
    console.log(true);
    replaceVal.replace(/^0+/, '');
    console.log(replaceVal);
  }
  console.log(replaceVal);
  if (replaceVal == memberNumMin - 1 || replaceVal > memberNumMax) {
    val.nextElementSibling.innerHTML = `参加申し込みは ${memberNumMin} 人から ${memberNumMax} 人までです`;
    val.nextElementSibling.classList.remove('d-none');
    val.value = replaceVal;
    return false;
  }
  var memberFormat = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
  if (replaceVal.match(memberFormat)) {
    val.value = replaceVal;
    errMsg(val, true);
    return true;
  } else {
    val.value = replaceVal;
    errMsg(val, false);
    return false;
  }
}

// エラーメッセージ
function errMsg(params, flag) {
  if (flag == true) {
    params.nextElementSibling.innerHTML = '<span class="text-success">OK<i class="fas fa-check ml-1"></i></span>';
    params.nextElementSibling.classList.remove('d-none');
  } else if (flag == false && params == yourName) {
    params.nextElementSibling.innerHTML = '4 文字以上で設定してください';
    params.nextElementSibling.classList.remove('d-none');
  } else if (flag == false && params == yourEmail) {
    params.nextElementSibling.innerHTML = 'メールの形式が正しくありません';
    params.nextElementSibling.classList.remove('d-none');
  } else if (flag == false && params == yourGender) {
    params.nextElementSibling.innerHTML = 'どちらかを選択してください';
    params.nextElementSibling.classList.remove('d-none');
  } else if (flag == false && params == yourTel) {
    params.nextElementSibling.innerHTML = '電話番号の形式が正しくありません';
    params.nextElementSibling.classList.remove('d-none');
  } else if (flag == false && params == yourMembers) {
    params.nextElementSibling.innerHTML = '数字で入力してください';
    params.nextElementSibling.classList.remove('d-none');
  }
}
