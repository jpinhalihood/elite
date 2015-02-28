package ca.jeffprice.xmltransform;


import java.io.File;
import java.io.FileInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.Result;
import java.net.URL;
import java.net.URLConnection;



/**
 *
 * @author jeff
 */
public class XMLTransform {

    private String xsl;
    private String xml;

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


    public String applyTransformation() {

        String transformedXML = null;
        try
        {
                FileInputStream isXML =
                    new FileInputStream(this.getXml());

                StreamSource srcXML = new StreamSource(isXML);

                FileInputStream isXSL =
                    new FileInputStream(this.getXsl());
                StreamSource srcXSL = new StreamSource(isXSL);

                TransformerFactory tf = TransformerFactory.newInstance();
                Transformer transformer = tf.newTransformer(srcXSL);
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                transformer.transform(srcXML, new StreamResult(baos));
                transformedXML = baos.toString();
        }
        catch(Exception ex)
        {
                transformedXML = "Unable to transform feed: " + ex.getMessage();
        }

        return transformedXML;
    }

}
