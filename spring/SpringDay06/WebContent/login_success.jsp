<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>login_success.jsp</title>
</head>
<body>
	<%
	//로그인 성공했으면 로그인 성공 페이지로 보내지말고 메인으로 ㄱㄱ
		response.sendRedirect("/SpringDay06/");
	%>
</body>
</html>