<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>file_list.jsp</title>
</head>
<body>
	<table border="1">
		<tr>
			<th>파일번호</th>
			<th>파일원래이름</th>
		 	<th>저장된 경로</th>
		</tr>
		<c:if test="${empty fileList}">
			<tr>
				<td colspan="3">
					업로드 된 파일 내역이 존재하지 않습니다.
				</td>
			</tr>
		</c:if>
			
		<c:if test="${not empty fileList}">
			<c:forEach items="${fileList}" var="f">
				<tr>
					<td>${f.fileNum}</td>
					<td>
						<a href="download.do?fileNum=${f.fileNum}">
							${f.originalName}
						</a>
					</td>
					<td>${f.savedPath}</td>
				</tr>
			</c:forEach>
		</c:if>
	</table>

	<hr>
<form action="upload.do" method="post" enctype="multipart/form-data">		업로드할 파일을 선택하세요.
		<input type="file" name="uploadFile"/><br>
		<input type="submit" value="업로드">
	</form>	
</body>
</html>