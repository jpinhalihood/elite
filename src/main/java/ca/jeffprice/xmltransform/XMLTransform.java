package ca.jeffprice.xmltransform;



import java.io.FileInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.Transformer;

import java.io.FileNotFoundException;


/**
 *
 * @author jeff
 */
public class XMLTransform {

    private String xsl;
    private String xml;
    
    private InputStream xmlInputStream;
    private InputStream xslInputStream;
    
    public XMLTransform() {
    	
    }
    
    public XMLTransform(InputStream xmlInputStream, InputStream xslInputStream) {
    	this.xmlInputStream = xmlInputStream;
    	this.xslInputStream = xslInputStream;
    }

    public String getXml() {
        return xml;
    }

    public void setXml(String xml) {
        this.xml = xml;
    }

    public String getXsl() {
        return xsl;
    }

    public void setXsl(String xsl) {
        this.xsl = xsl;
    }

    public void setXmlInputStream(InputStream xmlInputStream) {
    	this.xmlInputStream = xmlInputStream;
    }
    
    public void setXslInputStream(InputStream xslInputStream) {
    	this.xslInputStream = xslInputStream;
    }

    public InputStream getXmlInputStream() 
    	throws FileNotFoundException {    
    	if(this.xmlInputStream == null && this.xml != null) {
    		FileInputStream xmlStream =
                    new FileInputStream(this.getXml());
    		return xmlStream;
    	}
        	
    	return this.xmlInputStream;
    }
    
    public InputStream getXslInputStream() 
        	throws FileNotFoundException {    
        	if(this.xslInputStream == null && this.xsl != null) {
        		FileInputStream xslStream =
                        new FileInputStream(this.getXsl());
        		return xslStream;
        	}
            	
        	return this.xslInputStream;
        }    
    
    
    public String applyTransformation() {

        String transformedXML = null;
        try
        {                
                StreamSource xmlStreamSource = new StreamSource(this.getXmlInputStream());                
                StreamSource xslStreamSource = new StreamSource(this.getXslInputStream());

                TransformerFactory tf = TransformerFactory.newInstance();
                Transformer transformer = tf.newTransformer(xslStreamSource);
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                transformer.transform(xmlStreamSource, new StreamResult(baos));
                transformedXML = baos.toString();
        }
        catch(Exception ex)
        {
                transformedXML = "Unable to transform feed: " + ex.getMessage();
        }

        return transformedXML;
    }

}
