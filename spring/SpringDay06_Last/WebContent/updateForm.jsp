<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>updateForm.jsp</title>
</head>
<body>
	<form action="update.do" method="post">
		<table border="1">
			<tr>
				<td>����:</td>
				<td>
					<input type="text" name="title" size="20" value="${original.title}">
				</td>	
			</tr>
			<tr>
				<td>����:</td>
				<td>
					<textarea rows="10" cols="10" placeholder="���⿡ ���� �Է�" name="content"></textarea>
				</td>	
			</tr>
					<tr>
			<td colspan="2">
				<input type="hidden" name="articleNum" value="${original.articleNum}">
				<input type="submit" value="�ۼ��Ϸ�">
			</td>	
		</tr>
		
		
		</table>
	</form>
</body>
</html>