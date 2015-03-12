<%-- 
    Document   : index
    Created on : Aug 24, 2010, 11:48:34 PM
    Author     : jeff
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<%@ include file="common/components/page_browser_detect.jsp" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta name="google-site-verification" content="zeL65A2Z5CWVGQxtYPimQcfS7XcvAsvc3f9lBO-7RNw" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Halifax DJ company Elite Disc Jockey Systems provides DJs and disc jockey services for weddings, proms, school dances and special/corporate events in Halifax, Dartmouth and Bedford, Nova Scotia Canada."/>
	<link rel="canonical" href="http://www.elitediscjockeysystems.com/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="www.facebook.com/elitedjav" />
	<meta property="og:description" content="Halifax DJ company Elite Disc Jockey Systems provides DJs and disc jockey services for weddings, proms, school dances and special/corporate events in Halifax, Dartmouth and Bedford, Nova Scotia Canada." />
	<meta property="og:url" content="http://www.elitediscjockeysystems.com/" />
	<meta property="og:site_name" content="Elite Disc Jockey Systems" />
	<meta property="article:publisher" content="https://www.facebook.com/elitedjav" />
	<meta property="og:image" content="http://www.elitediscjockeysystems.com/dj/images/EliteLogo.jpg" />
	
	<title>Elite Disc Jockey Systems</title>	
</head>

<script type="text/javascript" src="common/scripts/reflection/reflection.js"></script>

<link rel="stylesheet" type="text/css"
    media="screen" href="../common/styles/styles_black.css"/>

<link rel="stylesheet" type="text/css"
    media="screen" href="styles/styles.css"/>


<script type="text/javascript" src="common/scripts/serialScroll/jquery-1.3.2.min.js"></script>



<body>

<div id="mainPanel" class="mainPanel">
    <div id="bannerPanel">
        <img src="dj/images/DJMainBanner.jpg" width="800">
    </div>
    
    <%@ include file="components/page_nav.jsp" %>
    <div id="contentPanel" class="contentPanel">
    <!-- start content -->
        <%@ include file="page/index.jsp" %>
    <!-- end content -->
    </div>
</div>

<%@ include file="../common/components/page_stat_counter.jsp" %>
</body>

</html>