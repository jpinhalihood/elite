<%--
    Document   : schools
    Created on : Aug 24, 2010, 11:48:34 PM
    Author     : jeff
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<title>Elite Disc Jockey Systems - DJ</title>

<link rel="stylesheet" type="text/css"
    media="screen" href="../common/styles/styles_black.css"/>

<script type="text/javascript"
    src="../common/scripts/serialScroll/jquery-1.3.2.min.js"></script>

<script type="text/javascript"
    src="scripts/schools.js"></script>

<link rel="stylesheet" type="text/css"
    media="screen" href="styles/schools.css"/>

<body>

<div id="mainPanel" class="mainPanel">

    <img src="images/SchoolsBanner.jpg" width="800">
    <%@ include file="components/page_nav.jsp" %>
    <div id="contentPanel" class="contentPanel">
    <!-- start content -->
        <%@ include file="page/schools.jsp" %>
    <!-- end content -->
    </div>
</div>

</body>

</html>