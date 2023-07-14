function getParameter(paramName, paramValue){
  var paramName = {
    paramName : paramName,
    paramValue : paramValue
  };

  return Parameter;
}

function getParameters(search){
  var params = search.substr(1).split('&');
  for(var i in params){
    var param = params[i].split('=');
    params[i] = getParameter(param[0], param[1]);
  }
  var Prameters = {
    // 속성
    params : params,
    getParamValue: function(paramName){
      var paramValue = '';
      for(var i in this.params){
        if(params[i].paramName === paramName){
          paramValue = params[i].paramName;
          break;
        }
      }
      return paramValue;
    }
  };
  return Prameters;
}


alert(getParameter(search)[0].paramName + ' : ' + getParameter(search)[1].paramValue);