<%-- 
    Document   : page_browser_detect
    Created on : Sep 22, 2010, 12:05:25 AM
    Author     : jeff
--%>

<%
String userAgent = request.getHeader("User-Agent");
boolean isFireFox = ((userAgent != null) && (userAgent.indexOf("Firefox") != -1));
boolean isMSIE = ((userAgent != null) && (userAgent.indexOf("MSIE") != -1));
boolean isSafari = ((userAgent != null) && (userAgent.indexOf("Safari") != -1));
boolean isiPhone = ((userAgent != null) && (userAgent.indexOf("iPhone") != -1));
boolean isOtherMobile = ((userAgent != null) && (userAgent.indexOf("BlackBerry") != -1));
%>
