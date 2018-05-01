package com.isdream.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;

public class BaseHttpResponse extends HttpServlet {

    Random rand = new Random();
    AtomicInteger a = new AtomicInteger(rand.nextInt(1000));
    AtomicInteger b = new AtomicInteger(rand.nextInt(500));

    @Deprecated
    public String getResult(){
        if(a.equals(b)){
            return String.valueOf(a.addAndGet(b.get()));
        }
        else{
            return String.valueOf(0-a.get());
        }
    }
    public void doGet(HttpServletRequest request, HttpServletResponse response)
             throws ServletException, IOException{
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
        out.println("<HTML>");
        out.println("  <HEAD><TITLE>A Servlet</TITLE></HEAD>");
        out.println("  <BODY>");
        out.print("    This is ");
        out.print(this.getClass());
        out.println(", using the GET method<br />");
        out.print(getResult());
        out.println("  </BODY>");
        out.println("</HTML>");
        out.flush();
        out.close();
    }
}
