<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<html>
<head>
 <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <title>������ ���� ǥ���ϱ�</title>
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=KMrVJhyH8j9ALsG0oHQu"></script>
<title>upload_form.jsp</title>
</head>
<body>
	<form action="upload.do" method="post" enctype="multipart/form-data">
		�̸�:<input type="text" name="name" size="10"><br>
		�޴��� ��ȣ:<input type="text" name="phone" size="20"><br>
		����÷��: <input type="file" name="memberFile"><br>
		<input type="submit" value="upload">
	</form>
	<div id="map" style="width: 100%; height: 400px;"></div>

		<script>
			var mapOptions = {
	    		center: new naver.maps.LatLng(38.3595704, 127.105399),
	    		zoom: 10
			};
	
			var map = new naver.maps.Map('map', mapOptions);
		</script>
</body>
</html>