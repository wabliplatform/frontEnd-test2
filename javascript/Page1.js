let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';document.getElementById('iuza').onclick = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const complexElement = document.getElementById("iuza");const childs = complexElement.children;
      data.forEach((item,i) => {
      if(childs.length > i)
        {
          childs[i].textContent = data[i].userName ;
        }
      });
      [...childs].forEach((element,index) => {if(index > data.length) complexElement.removeChild(element)})}});};document.getElementById('ittst').onclick = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const complexElement = document.getElementById("ifz3q");const childs = complexElement.children;
      data.forEach((item,i) => {
      if(childs.length > i)
        {
          
        }
      });
      [...childs].forEach((element,index) => {if(index > data.length) complexElement.removeChild(element)})}});};