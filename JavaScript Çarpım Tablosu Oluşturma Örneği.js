document.write("<table border='3'><tr>");
        for (var x = 1; x <= 10; x++) {        
        document.write("<td>");
            for (var i = 1; i <= 10; i++) {
                document.write(x+"x" + i + "=" + x * i + "<br/>");
            }
            if(x==5)
            {
            document.write("</tr><tr>");
            }
            document.write("</td>");
        }    
        document.write("</tr><table>");