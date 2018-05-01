<%--
  Created by IntelliJ IDEA.
  User: Xuyuanjia
  Date: 2018/5/1
  Time: 1:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
    <link rel="stylesheet" href="styles/SchedulingMark.css" type="text/css" />
    <script src="libs/echarts.min.js"></script>

</head>
<body>
<div id="content">
    <div id="main" style="width: 600px;height:400px; float: left;"></div>
    <div id="graph" style="width: 700px;height:600px; float: left;"></div>
    <button onclick="reset2Graph()" style="float:right; margin-right: 170px;background-color: #46b3f8; color: #FFFFFF; font-size: 16px; padding: 0px;">优化实例调度</button>
</div>
</body>

<script src="scripts/SchedulingMark.js" charset="UTF-8"></script>
</html>
