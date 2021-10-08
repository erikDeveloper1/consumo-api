# consumo-api
consumo de api


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Axios consuming API REST Demo</title>
    </head>
    <body>
        <div>
            <div>
                <button onclick="getAllRequest()">Get All</button>
                <button onclick="getFilteredRequest()">Get Filtered</button>
                <button onclick="getByIdRequest()">Get by Id</button>
            </div>
            <div>
                <button onclick="postRequest()">Create</button>
            </div>
            <div>
                <button onclick="patchRequest()">Update</button>
            </div>
            <div>
                <button onclick="putRequest()">Replace</button>
            </div>
            <div>
                <button onclick="deleteRequest()">Delete</button>
            </div>
        </div>
        
        <script src="https://api.datos.gob.mx/v2/Records"></script>
        <script src="main.js"></script>
    </body>
</html>
