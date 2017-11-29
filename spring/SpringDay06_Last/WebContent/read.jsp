<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>read.jsp</title>
</head>
<body>
	<table border="1">
		<tr>
			<td>글번호:</td>
			<td>${board.articleNum}</td>
		</tr>
		
		<tr>
			<td>제목:</td>
			<td>${board.title}</td>
		</tr>
		<tr>
			<td>작성자:</td>
			<td>${board.writer}</td>
		</tr>
		<tr>
			<td>내용:</td>
			<td>${board.content}</td>
		</tr>
	</table>
	<a href="board.do">[목록으로]</a>
	<c:if test="${sessionScope.loginId == board.writer}">
		<a href="updateForm.do?articleNum=${board.articleNum}">[수정하기]</a>
		<a href="updateForm.do">[삭제하기]</a>
	</c:if>
</body>
</html>