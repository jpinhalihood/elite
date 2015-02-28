<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : price_list.xsl
    Created on : August 25, 2010, 12:07 AM
    Author     : jeff
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

<xsl:template match="/">
<link href="styles/rentals_scroll.css" rel="stylesheet" type="text/css" media="screen" />

<link rel="stylesheet" type="text/css"
    media="screen" href="../common/styles/styles_black.css"/>
<script>

var lastPanel;

function showCategory(id) {
    var catPan = document.getElementById(id);

    if(lastPanel) {
        if(lastPanel.style.visibility == 'visible')
            lastPanel.style.visibility = 'hidden';
    }

    if(catPan.style.visibility != 'visible')
    {
        catPan.style.visibility = 'visible';
    } else {
        catPan.style.visibility = 'hidden';
    }

    lastPanel = catPan;
}
</script>
<script type="text/javascript" src="../common/scripts/common.js"></script>

<script type="text/javascript" src="../common/scripts/serialScroll/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="../common/scripts/serialScroll/jquery.serialScroll-1.2.2-min.js"></script>
<script type="text/javascript" src="../common/scripts/serialScroll/jquery.scrollTo-1.4.2-min.js"></script>
<script type="text/javascript" src="scripts/rentals_init.js"></script>
<script type="text/javascript" src="scripts/rentals_expanding_panel.js"></script>
        
    <div id="screen">
        <!-- startNav -->
        <div id="navigation">
            <ul id="navcontainer">
                <xsl:for-each select="catalog/category[@type='equipment']">
                <li id="nav1">
                    <xsl:element name="a">
                        <xsl:attribute name="href">#</xsl:attribute>
                        <xsl:attribute name="onClick">javascript: showCategory('<xsl:value-of select="@id"/>');</xsl:attribute>
                        <xsl:text><xsl:value-of select="name"/></xsl:text>
                    </xsl:element>
                </li>
                </xsl:for-each>
            </ul>
        </div>
        <!-- endNav -->

        <div id="sections">
            <ul>
                <xsl:for-each select="catalog/category[@type='equipment']">
                <li>
                    <h2><xsl:value-of select="name"/></h2>
                    <div class="imagePanel">
                        <xsl:element name="img">
                            <xsl:attribute name="src">../common/images/spacer.png</xsl:attribute>
                            <xsl:attribute name="style"><xsl:text>filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='</xsl:text><xsl:value-of select="image-path"/><xsl:text>', sizingMethod='scale');</xsl:text></xsl:attribute>
                            
                        </xsl:element>
                        <!--<xsl:value-of select="description"/>-->
                        <xsl:element name="div">
                            <xsl:attribute name="id">showButton</xsl:attribute>
                            <xsl:attribute name="class">expanding_panel_button</xsl:attribute>
                            <xsl:attribute name="style">display: visible; margin-left: auto; margin-right: auto;</xsl:attribute>
                            <xsl:attribute name="onClick">javascript: showCategory('<xsl:value-of select="@id"/>');</xsl:attribute>
                            <xsl:text>Show Info</xsl:text>
                        </xsl:element>
                        <xsl:element name="div">
                            <xsl:attribute name="id">hideButton</xsl:attribute>
                            <xsl:attribute name="class">expanding_panel_button</xsl:attribute>
                            <xsl:attribute name="style">display: none; margin-left: auto; margin-right: auto;</xsl:attribute>
                            <xsl:attribute name="onClick">javascript: showCategory('<xsl:value-of select="@id"/>');</xsl:attribute>
                            <xsl:text>Hide Info</xsl:text>
                        </xsl:element>

                    </div>
                </li>
                </xsl:for-each>
            </ul>
        </div>

    </div>
    <div id="slider" class="expanding_panel" style="display: none;">
        <xsl:apply-templates/>
    </div>
    </xsl:template>

    <xsl:template match="catalog/category">
        <xsl:element name="div">
            <xsl:attribute name="id"><xsl:value-of select="@id"/></xsl:attribute>
            <xsl:attribute name="class">categoryPanel</xsl:attribute>
            <xsl:attribute name="style">visibility: hidden;</xsl:attribute>
            <xsl:apply-templates select="items"/>
        </xsl:element>
            
    </xsl:template>
    <xsl:template match="items">
        <xsl:apply-templates select="item"/><br/>
    </xsl:template>
    <xsl:template match="item">
        <div class="itemPanel">
            <table width="100%">
                <tr><td><h1><xsl:value-of select="name"/></h1></td></tr>
                <tr><td><h2><xsl:value-of select="type"/></h2></td></tr>
                <tr>
                    <td>
                        <xsl:element name="img">
                            <xsl:attribute name="src">
                                <xsl:text>images/rentals/</xsl:text>
                                <xsl:value-of select="../../@id"/>
                                <xsl:text>/</xsl:text>
                                <xsl:value-of select="image-path"/>
                            </xsl:attribute>
                            <xsl:attribute name="class">reflect rheight33</xsl:attribute>
                            <xsl:attribute name="width">200</xsl:attribute>
                        </xsl:element>
                    
                        <xsl:for-each select="description/list-item">
                            <li><xsl:value-of select="."/></li>
                        </xsl:for-each>
                    </td>
                </tr>
                <tr>
                    <td>
                        <!--<xsl:element name="input">
                            <xsl:attribute name="type">checkbox</xsl:attribute>
                            <xsl:attribute name="name">
                                <xsl:text>opt</xsl:text>
                                <xsl:value-of select="id"/>
                            </xsl:attribute>
                            <xsl:attribute name="value">
                                <xsl:value-of select="price[@rental]"/>
                            </xsl:attribute>
                        </xsl:element>-->
                        <xsl:text>$</xsl:text>
                        <xsl:value-of select="price[@type='rental']"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="price/@period"/>
                    </td>
                </tr>
            </table>
        </div>
        
    </xsl:template>
</xsl:stylesheet>