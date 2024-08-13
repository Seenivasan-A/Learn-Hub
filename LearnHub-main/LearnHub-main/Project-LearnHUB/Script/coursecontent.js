const courseContent = [
    {
        crs_id : 2,
        course_name:"Machine Learning",
        content1 :"What is Machine Learning",
        content2 :"Ml and Types",
        content3 :"supervised learning",
        content4 :"unsupervised learning",
        content5 :"reinforcement learning",
        answer : "Machine Learning (ML) is a branch of artificial intelligence (AI) focused on developing algorithms that allow computers to learn from data. Through pattern recognition and statistical techniques, ML models can make predictions or decisions without being explicitly programmed. ML techniques include supervised learning, unsupervised learning, and reinforcement learning.Applications range from image and speech recognition to recommendation systems and medical diagnosis. ML models require training on labeled data and validation to ensure accuracy and generalization to new data.Ethical considerations such as bias mitigation and privacy preservation are crucial in ML development. ML's rapid evolution is reshaping industries and driving innovation across various domains.",

         
    },
    {
        crs_id :4,
        course_name : "Internet Of Things",
        content1 :"What is Internet Of Things",
        content2 :"how Iot become popular",
        content3 :"IoT and Its types",
        content4 :"How it works",
        content5 :"Practical application",
        video_src  : "https://youtu.be/ps9ucSDH8s4?si=Sl9a_y9BCzCtOL30",
        answer  : "The Internet of Things (IoT) refers to a network of interconnected devices embedded with sensors and software, enabling them to collect and exchange data. These devices range from everyday objects to industrial machinery, facilitating automation, monitoring, and control of various processes. IoT applications span industries like healthcare, manufacturing, and smart homes, promising efficiency improvements and enhanced decision-making. By leveraging data from IoT devices, businesses can optimize operations, improve customer experiences, and drive innovation. Overall, IoT is revolutionizing how we interact with technology and the physical world.",

        
     
    },
    {
        crs_id :3,
        course_name : "Data Analytics",
     
        content1 :"What is Data Analytics",
        content2 :"outcomes of data analytics",
        content3 :"Data Analytics and Its types",
        content4 :"How data analytics works",
        content5 :"How data analytics applies",
        video_src : "https://youtu.be/LEH8TtCCYbM?si=JXMcVhhuFcUlbwMG",
        answer : "Data analytics involves the process of examining raw data to uncover meaningful insights, patterns, and trends that can inform decision-making and drive business strategies. It encompasses various techniques, including data mining, statistical analysis, machine learning, and visualization, to extract useful information from large datasets. Data analytics is used across various industries to optimize processes, understand customer behavior, predict trends, and gain a competitive advantage.",

       
    },
    {
        crs_id :1,
        course_name : "Cloud Computing",
        content1 :"What is cloud computing",
        content2 :"amazon web services",
        content3 :"cloud and Its types",
        content4 :"How cloud server works",
        content5 :"How cloud server applies",
        video_src : "https://youtu.be/LEH8TtCCYbM?si=JXMcVhhuFcUlbwMG",
        answer : "Cloud computing refers to the delivery of computing services over the internet, allowing users to access and use resources such as servers, storage, databases, networking, software, and more, without needing to own or maintain the physical infrastructure. It enables users to scale resources up or down based on demand, pay only for what they use (on a subscription or pay-per-use basis), and access services from anywhere with an internet connection. Examples of cloud computing services include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)..",

      
    },
    {
        crs_id :5,
        course_name : "Front End Development",
       
           content1 :"What is Frontend",
            content2 :"work of frontend",
            content3 :"toolkit for frontend",
            content4 :"roadmap for frontend",
            content5 :"popular frontend frameworks",
            video_src : "https://youtu.be/LEH8TtCCYbM?si=JXMcVhhuFcUlbwMG",
            answer : "Front-end development involves the creation and implementation of the visual and interactive aspects of websites and web applications that users interact with directly. This includes designing user interfaces (UI) using HTML, CSS, and JavaScript, ensuring compatibility across different browsers and devices, and optimizing for user experience. Front-end developers work closely with designers and back-end developers to bring designs to life and create seamless, intuitive user experiences on the web. They focus on aspects such as layout, navigation, responsiveness, and performance to enhance user engagement and satisfaction.",

        
    },
    {
        crs_id :6,
        course_name : "Full Stack Development",
            content1 :"What is Full Stack",
            content2 :"work of Full Stack",
            content3 :"toolkit for Full Stack",
            content4 :"roadmap for Full Stack",
            content5 :"popular Full Stack frameworks",
            video_src : "https://youtu.be/LEH8TtCCYbM?si=JXMcVhhuFcUlbwMG",
            answer : "Full-stack development refers to proficiency in both front-end and back-end technologies, enabling developers to work on all layers of a web application. Full-stack developers are proficient in languages and frameworks for both client-side (front-end) and server-side (back-end) development. They handle tasks such as designing user interfaces, implementing features, managing databases, and server-side logic. By mastering both front-end and back-end technologies, full-stack developers can build end-to-end solutions independently or collaborate effectively with specialized developers to create fully functional web applications.",

      
    },
    {
        crs_id :7,
        course_name : "Deep Learning",
     
            content1 :"What is Deep Learning",
            content2 :"DL and its types",
            content3 :"how Deep Learning become popular",
            content4 :"roadmap for Deep Learning",
            content5 :"an subset of AI",
            video_src : "https://youtu.be/LEH8TtCCYbM?si=JXMcVhhuFcUlbwMG",
            answer : "Deep learning is a subset of machine learning that involves artificial neural networks with multiple layers to learn representations of data. It excels at tasks like image and speech recognition, natural language processing, and recommendation systems. Deep learning algorithms automatically discover patterns and features from raw data, allowing them to make predictions or decisions with high accuracy. It has applications in various fields, including computer vision, healthcare, finance, and autonomous vehicles, driving advancements in AI and enabling sophisticated human-like capabilities in machines.",

      
    },
    {
        crs_id :8,
        course_name : "BackEnd Development",
       
            content1 :"What is BackEnd Development",
            content2 :"work of BackEnd Development",
            content3 :"toolkit for BackEnd Development",
            content4 :"roadmap for BackEnd Development",
            content5 :"popular BackEnd Development frameworks",
            video_src : "https://youtu.be/LEH8TtCCYbM?si=JXMcVhhuFcUlbwMG",
            answer : "Backend development focuses on the server-side programming, database management, and system architecture that power the functionality of websites and web applications. Backend developers work with server-side languages like Python, Ruby, Java, or Node.js to handle requests from the front-end, process data, and generate dynamic content. They interact with databases to store and retrieve information, ensuring data integrity, security, and scalability. Additionally, backend developers design APIs (Application Programming Interfaces) to facilitate communication between different software systems and enable integration with third-party services. Overall, backend development is crucial for building robust and scalable web applications that meet business requirements.",

      
    },
    {
        crs_id :9,
        course_name : "Python",
       
            content1 :"What is Python",
            content2 :"History of Python",
            content3 :"installation and its setup",
            content4 :"roadmap for Python Developer",
            content5 :"popular python packages",
            video_src : "https://youtu.be/LEH8TtCCYbM?si=JXMcVhhuFcUlbwMG",
            answer : "Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It is widely used in various domains, including web development, data analysis, artificial intelligence, scientific computing, and automation. Python's extensive standard library and large ecosystem of third-party libraries and frameworks make it a popular choice for developers. Its syntax emphasizes readability and simplicity, making it accessible for beginners while still powerful enough for experienced programmers. Python's dynamic typing and automatic memory management contribute to its ease of use and rapid development. Overall, Python is a versatile language suitable for a wide range of applications and skill levels.",

     
    },
    {
        crs_id :10,
        course_name : "JavaScript",
     
            content1 :"What is JavaScript",
            content2 :"Application of JavaScript",
            content3 :"installation and its setup",
            content4 :"roadmap for JavaScript Developer",
            content5 :"Javascript For WebDevelopement",
            video_src : "https://youtu.be/LEH8TtCCYbM?si=JXMcVhhuFcUlbwMG",
            answer : "JavaScript is a versatile programming language primarily used for creating dynamic and interactive web content. As a client-side scripting language, it runs in web browsers and allows developers to manipulate the content and behavior of web pages in response to user actions. JavaScript is essential for building modern web applications, enabling features such as form validation, interactive maps, animated graphics, and asynchronous communication with servers (AJAX). With the advent of server-side JavaScript frameworks like Node.js, JavaScript can also be used for server-side programming, making it a full-stack development language. JavaScript's ubiquity, flexibility, and extensive ecosystem of libraries and frameworks make it one of the most popular programming languages in the world.",



        
    
    },
    {
        crs_id :11,
        course_name : "C#",
       
            content1 :"What is C sharp",
            content2 :"how C becomes C sharp",
            content3 :"installation and its setup",
            content4 :"roadmap for C# Developer",
            content5 :"popular creation of C#",
            video_src : "https://youtu.be/LEH8TtCCYbM?si=JXMcVhhuFcUlbwMG",
            answer : "C# is a powerful, object-oriented programming language developed by Microsoft. It is designed for building a wide range of applications, including desktop applications, web applications, mobile apps, games, and enterprise software. C# is part of the .NET framework and offers features such as strong typing, garbage collection, and support for modern programming paradigms like asynchronous programming and LINQ (Language Integrated Query). It is commonly used in conjunction with other Microsoft technologies like ASP.NET for web development and Unity for game development. Overall, C# is a versatile language with a large community and robust ecosystem, making it suitable for various software development projects.",


        
    },
    {
        crs_id :12,
        course_name : "Java",
     
            content1 :"What is Java",
            content2 :"Application of Java",
            content3 :"installation and its setup",
            content4 :"roadmap for Java Developer",
            content5 :"Java For WebDevelopement",
            video_src : "",
            answer : "Java is a versatile, object-oriented programming language known for its portability, reliability, and performance. Developed by Sun Microsystems (now owned by Oracle Corporation), Java is widely used for building a variety of applications, including web, desktop, mobile, and enterprise software. Java's principle allows developers to write code once and run it on any platform that supports Java without the need for recompilation. It has a large ecosystem of libraries, frameworks, and tools, making it suitable for developing complex, scalable applications. Java's strong typing, garbage collection, and platform independence contribute to its popularity among developers for building robust and scalable software solutions.",


    },
   
    
]