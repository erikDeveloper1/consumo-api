function getAllRequest()
{

   

   axios.get('https://api.datos.gob.mx/v2/Records')
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function getFilteredRequest()
{
   axios.get('https://api.datos.gob.mx/v2/Records', {
      params: {
         filter : 'myFilter'
      }
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function getByIdRequest()
{
   id = 10;
   axios.get('https://api.datos.gob.mx/v2/Records' + id)
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function postRequest()
{
   axios.post('https://api.datos.gob.mx/v2/Records', {
      data: 'NewItem'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function putRequest()
{
   id = 10;
   axios.put('https://api.datos.gob.mx/v2/Records' + id, {
      data: 'NewItem'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function patchRequest()
{
   id = 10;
   axios.patch('https://api.datos.gob.mx/v2/Records' + id, {
      data: 'NewItem'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function deleteRequest()
{
   id = 10;
   axios.delete('https://api.datos.gob.mx/v2/Records' + id)
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}
