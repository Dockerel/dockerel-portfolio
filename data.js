/**
 * 모든 콘텐츠는 이 객체만 수정하면 됩니다.
 * 필요한 경우 항목을 추가/삭제하거나 텍스트를 바꾸세요.
 */
window.siteContent = {
    navigation: {
        logo: "Giheon Do",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Opensource", href: "#opensource" },
            { label: "Awards", href: "#awards" },
            { label: "Tech", href: "#Tech" },
            { label: "Blog", href: "https://dockerel.tistory.com/", external: true },
            { iconClass: "fab fa-github", href: "https://github.com/Dockerel", external: true, noUnderline: true }
        ]
    },
    hero: {
        intro: {
            text: "Hi I'm",
            link: { label: "Giheon Do", href: "https://github.com/Dockerel" }
        },
        subtitle: "A developer who focuses on details",
        achievements: [
            {
                label: "Spring Contributor",
                href: "https://github.com/Dockerel/Dockerel/blob/main/spring.md",
                suffix: "(Spring Data JPA, Spring Boot, Spring Framework)"
            },
            {
                label: "Platinum 3",
                href: "https://solved.ac/profile/dgh0001",
                suffix: " in BOJ"
            }
        ]
    },
    projects: [
        {
            title: "DDIP",
            description: "Campus Information Trading Service",
            url: "https://github.com/Dockerel/ddip-BE/blob/main/README.md",
            backgroundImage: "./imgs/ddip.gif",
            backgroundColor: "#d6feff",
            featured: true
        },
        {
            title: "BigPicture",
            description: "AI Economic Report Service",
            url: "https://github.com/Dockerel/DataStreams-BE/blob/main/README.md",
            backgroundImage: "./imgs/bigpicture.gif",
            backgroundColor: "#2087FD",
            featured: true
        },
        {
            title: "Todak",
            description: "Emotional Support Diary Service",
            url: "https://github.com/Dockerel/4th-SC-TEAM1-BE/blob/main/README.md",
            backgroundImage: "./imgs/todak.gif",
            backgroundColor: "#E6EACC",
        },
        {
            title: "TALKAK",
            description: "AI ShortForm Creation Service",
            url: "https://github.com/Dockerel/Team5_BE/blob/Master/README.md",
            backgroundImage: "./imgs/talkak.png",
            backgroundColor: "#FFFFFF"
        },
        {
            title: "Campus Chatbot",
            description: "RAG based Campus Chatbot Service",
            url: "https://github.com/Dockerel/KnuChatbot-BE/blob/main/README.md",
            backgroundImage: "./imgs/chatbot.gif",
            backgroundColor: "#D41117",
            extraClasses: ["project--mobile-auto-image"]
        },
        {
            title: "Spring Projects",
            description: "Opensource Contribution",
            url: "https://github.com/Dockerel/Dockerel/blob/main/spring.md",
            backgroundImage: "./imgs/spring.gif",
            backgroundColor: "#6bb162ff",
            extraClasses: ["project--mobile-auto-image"]
        },
        {
            title: "Maeil Kanji",
            description: "Everyday Kanji Learning by Email",
            url: "https://github.com/Dockerel/MaeilKanji/blob/main/README.md",
            backgroundImage: "./imgs/maeilkanji.png",
            backgroundColor: "#D0BAA2"
        }
    ],
    about: {
        title: "About",
        paragraphs: [
            "I started web programming after a server crash during a concert ticketing event. As a developer, I dig deep into system internals and code execution. This led me to optimize various parts of multiple projects and become an contributor to Spring Data JPA, Spring Boot, and the Spring Framework.",
            "Also, based on the experience of solving more than 1,000 algorithmic problems in BOJ, I have experienced over 84 times improvement in performance by using segment-based structures and a 10 times increase in data growth, but 47 times improvement by removing unnecessary business logic and requests."
        ]
    },
    tech: {
        title: "Tech",
        categories: [
            {
                label: "Strong",
                items: "Java / Spring Boot / Spring Data JPA / MySQL / Redis / Prometheus / Grafana / RabbitMQ / Langchain4j / Python"
            },
            {
                label: "Knowledgeable",
                items: "Kotlin / Docker / Kubernetes / k6 / FastAPI / Pinecone / LLM"
            },
            {
                label: "ETC",
                items: "Engineer Information Processing(정보처리기사) / SQLD / TOEIC(24.02.25) / Git"
            }
        ]
    },
    opensource: {
        title: "Opensource",
        items: [
            {
                label: "Spring Data JPA",
                detail: "25.07 / Released - 3.5.2 / Performance improvement / ",
                link: { href: "https://github.com/spring-projects/spring-data-jpa/commits/main/?author=Dockerel", text: "link" }
            },
            {
                label: "Spring Boot",
                detail: "25.07 / Released - 3.4.8 / Code Quality Improvement / ",
                link: { href: "https://github.com/spring-projects/spring-boot/commits/main/?author=Dockerel", text: "link" }
            },
            {
                label: "Spring Framework",
                detail: "25.07 / Released - 3.4.8 / Documentation Accuracy Improvement / ",
                link: { href: "https://github.com/spring-projects/spring-framework/pull/35212", text: "link" }
            },
        ]
    },
    awards: {
        title: "Awards",
        items: [
            {
                label: "창업아이템 경진대회",
                detail: "25.11 / 우수상 / 소프트웨어교육원 / ",
                link: { href: "https://github.com/Dockerel/Dockerel/blob/main/%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A2%E1%84%92%E1%85%AC.jpeg", text: "link" }
            },
            {
                label: "대학생 논문경진대회",
                detail: "25.11 / 동상 / 한국정보기술학회 / ",
                link: { href: "https://github.com/Dockerel/Dockerel/blob/main/%E1%84%8B%E1%85%AE%E1%84%89%E1%85%AE%E1%84%82%E1%85%A9%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A1%E1%86%BC.pdf", text: "link" }
            }
        ]
    }
};

