<%-- 
    Document   : index.jsp
    Created on : Aug 24, 2010, 11:50:23 PM
    Author     : jeff
--%>




<!-- start content -->

<div id="packageBuilderPopUp">
    <div id="packageBuilderPopUpClose"
         onClick="javascript: hidePopUp('div#packageBuilderPopUp');">
        <img src="images/CloseButton.gif" width="17">
    </div>
    <div id="packageBuilderPanel">
            <%@ include file="../components/page_dj_package_builder.jsp" %>
    </div>
</div>

<div id="columnContainer">

    <div class="contentColumn1">
        <img src="images/SchoolsByElite.jpg"
             class="reflect rheight33">
	<!-- removed June 20/2011         
	<span class="header2">School Dances Done RIGHT! Every Night!</span>
        
	<p>
        We understand: going back to school stinks! But no one knows how to turn your
        school into the sickest place to be like ELITE does!
        <p><p>
        Our <a href="schools.jsp">School Dance Packages</a> make it
        easy to turn school into the place where
        all your Facebook pics are made!
        </p>-->

	<span class="header2">School Dances Done RIGHT! Night after Night!</span>
	<p>No other DJ Company in Atlantic Canada does school dances like ELITE does! Bigger Sound, Bigger Lights, Bigger Video mean a 	better bang for your dance dollar. Don't be fooled by imitators! Your school deserves the best! 
	Our School Dance Packages make it easy to turn your next school dance into a party you will Text, Twitter and Facebook about.
	</p>
        <p><a href="schools.jsp">Learn More ...</a></p>
        <div class="clearer">&nbsp;</div>
    </div>

    <div class="contentColumn2">
        <img src="images/EliteU.jpg"
             class="reflect rheight33"
             width="140" height="100">
        <p><span class="header2">Elite U: Your Party in Style</span></p>
        <p>
        There's never been an easier way to prove that <u>you</u> know how to throw
        the best parties on campus.  With
        rockin' sound, killer light shows and bad-a** nightclub DJs, your campus
        party will be an ELITE night to remember!
        </p>
        <p>
        Whether it's a campus society party, fundraiser or a graduation
        party/formal, there's no better way to unleash your elite inner-self!
        </p>

        <p><a href="eliteu.jsp">Learn More ...</a></p>
        <div class="clearer">&nbsp;</div>
    </div>

    <div class="contentColumn3">
        <img src="images/ThemePartiesByElite.jpg"
             class="reflect rheight33">

        <span class="header2">Theme Parties: Shake your Groove Thing!</span>
        <p>
        Impress your guests with something different and throw a theme party! Party goers
        will have a blast riding the wave of nostalgia
        as the music takes them "back to the days when..."
        </p>
        <p>
        Get Started: <span id="pbLink1" class="packageBuilderLink">Build a DJ Package</span>
        </p>
        <div class="clearer">&nbsp;</div>
    </div>
    
    <div class="clearer">&nbsp;</div>
</div>

<div class="rowContainer" style="border-width: 1px 1px 1px 1px; margin-top: 30px;">
    <div class="innerContentRow" style="top: 0px; left: 0px;">
        <%
            if(isMSIE) {
        %>
        <img src="images/spacer.png"
             class="reflect rheight10"
             style="float: left; margin: 0px 10px 10px 10px; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/Couple.png', sizingMethod='scale');"
             width="285"
             height="500">
        <%
            } else {
        %>
        <img src="images/Couple.png"
             class="reflect rheight10"
             style="float: left; margin: 0px 10px 10px 10px;"
             width="285"
             height="500">
        <%
            }
        %>
	<!-- Removed June 20/2011
        <p><span class="header2">Elite Weddings: You and Elite ... creating Dreams to Remember</span></p>
	<p>
        On the most special and often the most anticipated day of your life your guests
        will remember the reception as the place where memories were made.  The
        first dance, the laughter and, of course, the dancing.
        </p>
        <p>
        On this important day you want someone with a proven track record; someone
        who knows the music of generations; someone who can make grandma do the
        boog-a-loo but still make your friends get up and get down. Mostly you want
        everyone--including yourself--to just cut loose and have a great time.
        The last thing you want is to have to think about it.
        </p>
        <p>Elite DJs are profesional, courteous and--what's better--they really
         know their stuff!  So sit back and enjoy your day.  We've got this one.
        </p>-->

	<p><span class="header2">Elite Weddings: Providing the soundtrack... for the dance you will always remember.</span></p>
	<p>
	On the most special and often the most anticipated day of your life your guests will remember the reception as the place where 	fun was had and memories were made. The first waltz, the laughter and, of course, the dancing will be what is remembered for 	years.</p>
 	</p>
	<p>
	On the most important day of your life you want a Disc Jockey with a proven track record; someone who knows the music of 	generations; someone who can provide a fun atmosphere. Elite Disc Jockeys can provide all of those things and more guaranteed.     </p> 
        <%
            if(isMSIE) {
        %>
        <img src="images/spacer.png"
             class="reflect rheight10"
             style="float: right; margin: 0px 10px 10px 10px; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/WhiteRoses.png', sizingMethod='scale');"
             width="300" height="82">
        <%
            } else {
        %>
        <img src="images/WhiteRoses.png"
             class="reflect rheight10"
             style="float: right; margin: 0px 10px 10px 10px;"
             width="300" height="82">
        <%
            }
        %>
        
        <p>
        To learn more, start by contacting one of our Special Event Consultants
        or start by getting an online quote. <span id="pbLink2" class="packageBuilderLink">Build a DJ Package.</span>
        </p>


        <div class="clearer">&nbsp;</div>
    </div>

    <div class="innerContentRow" style="top: -170px; left: 380px; width: 400px;">
        <img src="images/VideoReflect.gif"
             style="float: right; margin: 0px 10px 10px 10px;"
             width="130">

        <p><span class="header2">Corporate Events that Lead!</span></p>
        <p>
        Whether you need a DJ, an AV technician to operate sound, lights
        and projection systems or simply some <a href="../av/index.jsp">equipment rentals</a>
        to supplement your special event, Elite Special Event Consultants help you
        make your special event a success by ensuring that you don&#146;t have to be worried
        about the tedious audio/visual details.
        </p>
        <p>
        Get Started: <span id="pbLink3" class="packageBuilderLink">Build a DJ Package</span>
        </p>
        <div class="clearer">&nbsp;</div>
    </div>



    <div class="innerContentRow" style="top: -120px; left: 0px; width: 700px;">
        <img src="images/NightClubsByElite.jpg"
		style="float: left; margin: 0px 40px 10px 10px;"
             class="reflect rheight33">
        <span class="header2">Your nightclub made ELITE</span>
        <p>
        Club goers expect a good time on their night out. Music
        creates the vibe that keeps them coming back week after week!
        </p>
        <p>
        <!--ELITE DJs have the professional attitude and hours logged on the decks
        to keep your club booming and ensure your clients have the time
        they demand!-->
        An ELITE DJ can turn your establishment from LAME to INSANE!
        </p>
        <p><a href="nightclubs.jsp">Learn More ...</a></p>
        <div class="clearer">&nbsp;</div>

    </div>

    <div class="innerContentRow" style="top: -80px; left: 0px; width: 700px;">
        <% if (isMSIE) { %>
        <img src="images/spacer.png"
             class="reflect rheight10"
             style="float: right; margin: 0px 10px 10px 10px; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/CubeTruck.png', sizingMethod='scale');"
             width="350" height="167">
        <% } else { %>
        <img src="images/CubeTruck.png"
             style="float: right; margin: 0px 10px 10px 40px;"
             class="reflect rheight33"
             width="350">
        <% } %>
        <p><span class="header2">Our Equipment, Your Party</span></p>
        <p>
        Elite's rapidly expanding equipment rental center is exactly what you
        need to supplement your event with professional quality, reliable
        audio and video equipment ranging from CD players and speakers to
        video screens and projectors.
        </p>
        <p>
        Elite is your complete solution for audio/video systems and rentals;
        in fact, many would call us experts.  Check out our
        <a href="../av/index.jsp">Audio/Video Rental Department</a>.
        </p>

        <div class="clearer">&nbsp;</div>
    </div>
</div>
<!--
<div id="btnOn" class="expanding_panel_button" style="display: visible;">View DJ Packages</div>
<div id="btnOff" class="expanding_panel_button" style="display: none;">Hide DJ Packages</div>
<p>&nbsp;</p>
-->


    <!-- end content -->
