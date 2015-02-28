<%-- 
    Document   : schools_1.jsp
    Created on : Sep 14, 2010, 7:44:49 PM
    Author     : jeff
--%>
<div id="container">
    <span class="header1">Top 10 Reasons to Hire Elite Disc Jockey Systems for Your Next Event</span>
            
    <div id="contentRow1" class="rowContainer">
        <div class="colText">
            
            <span class="header2">1. Professional</span><br>
            <p>EDJS is a professional company. We provide DJ Services as a profession. Not a part time job.
            </p>

            <span class="header2">2. Quality</span><br>
            <p>The quality of an EDJS event is second to none. Quality equipment, quality staff and a quality performance every time.</p>

            <span class="header2">3. Value</span><br>
            <p>When you compare apples with apples, EDJS gives you the best value for your entertainment dollar in the industry.</p>

            <span class="header2">4. Appearance</span><br>
            <p>EDJS wants to represent you in the best way possible. We arrive at your event dressed appropriately with a neat and tidy appearance.</p>
        </div>
        <div class="colImage">
            <img src="images/Tuxedo.jpg"
                 class="reflect rheight33"
                 width="250px"
                 style="margin: 0px 10px 0px 50px;">
        </div>
        <div class="clearer">&nbsp;</div>
    </div>
    <div id="contentRow2" class="rowContainer">
        <div class="colImage" style="width:45%;">
            <%
                if(isMSIE) {
            %>
            <img src="images/spacer.png"
                 class="reflect rheight33"
                 width="200px" height="120"
                 style="margin: 0px 0px 0px 100px; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                 src='images/Equipment.png', sizingMethod='scale');">
            <%
                } else {
            %>
            <img src="images/Equipment.png"
                 class="reflect rheight33"
                 width="200px" height="120"
                 style="margin: 0px 0px 0px 100px;">
            <%
            }
            %>
        </div>
        <div class="colText">
            <span class="header2">5. Music Library</span><br>
            <p>Elite uses an extensive AVLA licensed digital music library. A computerized music listing system makes requesting songs easy.</p>

            <span class="header2">6. Equipment</span><br>
            <p>EDJS uses only industry standard equipment designed for professional Disc Jockeys. Equipment is professionally cased for a clean looking set up.</p>

            <span class="header2">7. Experience</span><br>
            <p>EDJS has experience in entertaining people with any musical taste. We can read a crowd and determine what music will keep the dance floor full. We also have knowledge of music from the past to the present which makes requesting songs easier. Especially when you aren't exactally sure what song you're looking for.</p>
        </div>
        
        <div class="clearer">&nbsp;</div>
    </div>
    <div id="contentRow2" class="rowContainer">
        <div class="colText">
            <span class="header2">8. Punctual</span><br>
            <p>EDJS sets up on time. Shows up on time and is ready to start the party on time.</p>

            <span class="header2">9. Safety</span><br>
            <p>EDJS takes safety seriously. Protective footwear is required by all staff during set up and teardown. All equipment is CSA approved. All cabling is the proper gauge and gaffed in high traffic areas.</p>

            <span class="header2">10.  Contract</span><br>
            <p>All events require a contract to be signed. This will avoid any surprises and guarantee you get what you paid for.</p>
        </div>
        <div class="colImage" >
            <%
                if(isMSIE) {
            %>
            <img src="images/spacer.png"
                 class="reflect rheight33"
                 width="220px" height="219"
                 style="margin: 0px 0px 0px 60px; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
                 src='images/Safety.png', sizingMethod='scale');">
            <%
                } else {
            %>
            <img src="images/Safety.png"
                 class="reflect rheight33"
                 width="220px" height="219"
                 style="margin: 0px 0px 0px 60px;">
            <%
                }
            %>
        </div>
        <div class="clearer">&nbsp;</div>
    </div>
</div>