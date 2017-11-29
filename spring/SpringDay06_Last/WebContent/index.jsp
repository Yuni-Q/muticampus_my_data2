<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>간단한 지도 표시하기</title>
<script type="text/javascript"
	src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=KMrVJhyH8j9ALsG0oHQu"></script>

<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>index.jsp</title>
</head>
<body>
	<h2>이곳은 메인 화면 입니다.</h2>
	<c:if test="${empty sessionScope.loginId}">
		<form action="login.do" method="post">
			<table border="1">
				<tr>
					<td>아이디:</td>
					<td><input type="text" name="userId"></td>
				</tr>
				<tr>
					<td>패스워드:</td>
					<td><input type="password" name="userPw"></td>
				</tr>
				<tr>
					<td colspan="2"><input type="submit" value="로그인"></td>
				</tr>
			</table>
		</form>
		<hr>
		<a href="joinForm.do">
			<button>회원가입</button>
		</a>
	</c:if>

	<c:if test="${not empty sessionScope.loginId}">
		${sessionScope.loginId}님 반갑습니다.<br>
		<a href="#">My page</a>
	</c:if>
	<hr>
	<a href="board.do">[게시판 들어가기]</a>
	<a href="writeForm.do">[글쓰기]</a>
	<div id="map" style="width: 100%; height: 400px;"></div>

	<script>
var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

var map = new naver.maps.Map('map', mapOptions);
</script>
</body>
</html>