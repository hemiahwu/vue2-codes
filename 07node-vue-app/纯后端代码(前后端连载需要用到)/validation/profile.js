const Validator = require('validator');
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if(!Validator.isLength(data.handle,{min:2,max:40})){
    errors.handle = "用户名的长度不能小于2位并且不能大于40位!";
  }

  if(Validator.isEmpty(data.handle)){
    errors.handle = "handle不能为空!";
  }

  if(Validator.isEmpty(data.status)){
    errors.status = "status不能为空!";
  }

  if(Validator.isEmpty(data.skills)){
    errors.skills = "skills不能为空!";
  }

  if(!isEmpty(data.website)){
    if(!Validator.isURL(data.website)){
      errors.website = "url不合法";
    }
  }

  if(!isEmpty(data.tengxunkt)){
    if(!Validator.isURL(data.tengxunkt)){
      errors.tengxunkt = "url不合法";
    }
  }

  if(!isEmpty(data.wangyikt)){
    if(!Validator.isURL(data.wangyikt)){
      errors.wangyikt = "url不合法";
    }
  }

  return {
    errors,
    isValid:isEmpty(errors)
  };
}