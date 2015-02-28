<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" indent="yes" omit-xml-declaration="yes"/>
<xsl:template match="/">
    <!-- Styles and Script -->
    <link rel="stylesheet" href="../common/styles/styles_black.css" type="css/text"/>
    <link rel="stylesheet" type="text/css"
        media="screen" href="styles/package_builder.css"/>

    <script type="text/javascript"
        src="scripts/package_builder.js"></script>

    <form id="customPkg" name="customPkg">
    <div id="packagesPanel">
        <xsl:for-each select="catalog/category[@type='packages']/items/item">
        <div id="opt1" class="packageOption">
            <xsl:element name="div">
                <xsl:attribute name="id"><xsl:text>pkg</xsl:text><xsl:value-of select="position()"/></xsl:attribute>
                <xsl:attribute name="class">packageHeader</xsl:attribute>
                <table border="0" width="100%">
                    <tr>
                        <td width="5%">
                            <xsl:element name="a">
                                <xsl:attribute name="id"><xsl:text>pkgLink</xsl:text><xsl:value-of select="position()"/></xsl:attribute>
                                <xsl:attribute name="onClick"><xsl:text>javascript:handleClick('</xsl:text>a#pkgLink<xsl:value-of select="position()"/><xsl:text>','div#xp</xsl:text><xsl:value-of select="position()"/><xsl:text>');</xsl:text></xsl:attribute>
                            +</xsl:element>
                        </td>
                        <td width="85%">
                            <xsl:element name="input">
                               <xsl:attribute name="type">checkbox</xsl:attribute>
                               <xsl:attribute name="value"><xsl:value-of select="price[@type='addon']"/></xsl:attribute>          
                               <xsl:attribute name="onClick">handleCheck(this);</xsl:attribute>                               
                                <xsl:if test="position() = 1">
                                    <xsl:attribute name="disabled"></xsl:attribute>
                                    <xsl:attribute name="checked"></xsl:attribute>
                                </xsl:if>
                            </xsl:element><xsl:value-of select="name"/>
                        </td>
                        <td width="2%" align="left">$</td>
                        <td width="8%" align="right"><xsl:value-of select="price[@type='addon']"/><xsl:text>/</xsl:text><xsl:value-of select="price/@period"/></td>
                    </tr>
                </table>
            </xsl:element>

            <xsl:element name="div">
                <xsl:attribute name="id"><xsl:text>xp</xsl:text><xsl:value-of select="position()"/></xsl:attribute>
                <xsl:attribute name="class">expandingPackagePanel</xsl:attribute>
                <ul>
                    <xsl:for-each select="description/list-item">
                    <li><xsl:value-of select="."/></li>
                    </xsl:for-each>
                </ul>
                <div class="caret"><img src="images/caret.gif" width="12"/></div>
            </xsl:element>
        </div>
        </xsl:for-each>
        <div id="optTotal" class="packageOption">
            <div class="packageHeader" id="pkgTotal">
                <table border="0" width="100%">
                    <tr>
                        <td width="85%">
                            Total
                        </td>
                        <td width="5%" align="left">$</td>
                        <td width="10%" align="right"><div id="total">0.00</div></td>
                    </tr>
                </table>               
            </div>
        </div>
    </div>
    </form>
</xsl:template>

</xsl:stylesheet>