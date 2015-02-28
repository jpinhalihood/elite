<%-- 
    Document   : page_dj_package_builder
    Created on : Sep 8, 2010, 9:54:51 PM
    Author     : jeff
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">


<%@ page import="ca.jeffprice.xmltransform.XMLTransform, java.io.InputStream" %>
<%
	ServletContext context = request.getSession().getServletContext();
	
	String xmlPath = "/common/xml/price_list.xml";
	String xml = context.getRealPath(xmlPath);
	InputStream xmlStream = context.getResourceAsStream(xmlPath);
		
	String xslPath = "/dj/xml/dj_package_builder.xsl";
	String xsl = context.getRealPath(xslPath);
	InputStream xslStream = context.getResourceAsStream(xslPath);
	
	
	XMLTransform xt = new XMLTransform(xmlStream, xslStream);
	xt.setXml(xml);
	xt.setXsl(xsl);
	String output = xt.applyTransformation();
%>
<%=output%>
