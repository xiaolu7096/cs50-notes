### 1.introduction
* understanding:flask is a thirf-party library which provides a flask framework that **connects the front end(html,css...) and back end(python)**of a web page.
* function:create a **dynamic web**
* structure of the project directory
```
project_folder/
│
├── app.py              # 你的 Python 主程序 (Controller)
├── requirements.txt    # 依赖包列表
├── static/             # 存放静态文件 (CSS, 图片, JS)
│   └── styles.css
└── templates/          # 存放 HTML 模板文件 (Views)
    ├── layout.html
    ├── index.html
    └── greet.html
```
### 2.The smallest runnable application
```Python
from flask import Flask, render_template, request

# initialize Flask 应用
app = Flask(__name__)
#create a flask application instance(app)
#__name__:start a new web application centered on the current python file

# 定义路由：当用户访问根目录 "/" 时（即只输入网页时，给用户看什么）
@app.route("/")
def index():
    return "Hello, World!"
```
### 3.Render Template
```python
@app.route("/")
def index():
    # Flask 会自动去 templates 文件夹找 index.html
    return render_template("index.html")#你写的网页前端
```
### 4.variables passing and Jinja2syntax
```python
@app.route("/greet")
def greet():
    # 获取 URL 参数 ?name=xxx
    user_name = request.args.get("name", "Guest") 
    return render_template("greet.html", name=user_name)
```
templates
* our webs have many "similar" pages,we can create template to allow the body to be unique but copy the same layout. 
instances:
core jinja2:
`{{ ... }}`:output variables
`{%...%}`:write"if,for"in html
```html
<h1>Hello, {{ name }}!</h1>  <!-- {{ }} 输出变量 -->

{% if name == "David" %}     <!-- {% %} 逻辑控制 -->
    <p>Professor</p>
{% endif %}
```
### 5.Form Handling(get,post)-important
1. GET:acquire data,arguments can be seen in url
2. POST:submit data with parameters in the request body,url is invisible 
3. ```python
   @app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # 用户点击提交：从"信封"(form)里拿数据
        name = request.form.get("name")
        return render_template("greet.html", name=name)
    
    # 用户刚进来：显示表单
    return render_template("index.html")
   ```
**HTML 表单写法:**

HTML

```HTML
<form action="/" method="post">
    <input name="name" type="text" placeholder="Name">
    <button type="submit">Greet</button>
</form>
```

#### 5. Template Inheritance (Layouts)

**templates/layout.html (母板):**

HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My App</title>
    </head>
    <body>
        {% block body %}{% endblock %}  <!-- 挖个坑给子页面填 -->
    </body>
</html>
```

**templates/index.html (子页面):**

HTML

```jinja2
{% extends "layout.html" %}
#use "layout.html" termplate
{% block body %}
    <h1>Home Page</h1>
{% endblock %}
```
### project:frosh ims

