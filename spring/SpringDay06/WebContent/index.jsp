<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>index.jsp</title>
</head>
<body>
	<h2>�̰��� ���� ȭ�� �Դϴ�.</h2>
	<c:if test="${empty sessionScope.loginId}">
	<form action="login" method="post">
		<table border="1">
			<tr>
				<td>���̵�:</td>
				<td>
					<input type="text" name="userId">
				</td>
			</tr>
			<tr>
				<td>�н�����:</td>
				<td>
					<input type="password" name="userPw">
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<input type="submit" value="�α���">
				</td>
			</tr>
		</table>	
	</form>
	<hr>
	<a href="joinForm.do">
		<button>ȸ������</button>
	</a>
	</c:if>
	
	<c:if test="${not empty sessionScope.loginId}">
		${sessionScope.loginId}�� �ݰ����ϴ�.<br>
		<a href="#">My page</a>
	</c:if>
</body>
</html>