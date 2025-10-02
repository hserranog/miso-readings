// data.js - Course readings data
const readingsData = {
  class1: {
    name: "MISW 4101 Prácticas esenciales de desarrollo de ingeniería de software para el agilismo",
    weeks: {
      1: [
        {
          title: "Manifiesto por el Desarrollo Ágil de Software",
          description: "<ul><li>¿Cuáles son las técnicas o prácticas específicas que se pueden derivar de los principios ágiles?</li><li>¿Cuáles son los objetivos que persiguen los métodos ágiles?</li><li>¿Qué problemas intenta resolver el agilismo en el contexto de desarrollo de software?</li></ul>",
          coverImage: "",
          link: "https://agilemanifesto.org/iso/es/manifesto.html"
        },
        {
          title: "The State of Agile Software in 2018",
          author: "Martin Fowler",
          description: "<ul><li>¿Cuáles son las técnicas o prácticas específicas que se pueden derivar de los principios ágiles?</li><li>¿Cuáles son los objetivos que persiguen los métodos ágiles?</li><li>¿Qué problemas intenta resolver el agilismo en el contexto de desarrollo de software?</li></ul>",
          coverImage: "images/martin_fowler.png",
          link: "https://martinfowler.com/articles/agile-aus-2018.html"
        },
        {
          title: "Essential Scrum: A Practical Guide to the Most Popular Agile Process",
          author: "Kenneth S. Rubin",
          description: "<ul><li>¿Qué es una historia de usuario y cómo se define?</li><li>¿Qué es una tarjeta de las 3C?</li><li>¿Cuál es la importancia de las conversaciones al escribir historias de usuario?</li><li>¿Por qué son importantes los criterios (o condiciones) de aceptación en una historia?</li><li>¿En qué momento se debe detallar una historia de usuario?</li><li>¿Qué significa detallar una historia de usuario?</li><li>¿Qué características debe cumplir una historia de usuario para que sea considerado una buena historia?</li></ul>",
          coverImage: "images/essential_scrum_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005388711907681",
          chapters: ["Chapter 5. Requirements and User Stories"]
        },
        {
          title: "The State of Agile Software in 2018",
          author: "Ivar Jacobson",
          description: "<ul><li>¿Cómo conviven las historias de usuario y la práctica Use-Case 2.0?</li></ul>",
          coverImage: "",
          link: "https://www.ivarjacobson.com/publications/white-papers/use-case-hub-software-development"
        }
      ],
      2: [
        {
          title: "Version Control Tools",
          author: "Martin Fowler",
          coverImage: "images/martin_fowler.png",
          link: "https://martinfowler.com/bliki/VersionControlTools.html",
        },
        {
          title: "The mind behind Linux",
          author: "Linus Torvalds",
          coverImage: "",
          link: "https://www.ted.com/talks/linus_torvalds_the_mind_behind_linux"
        }
      ],
      3: [],
      4: [
        {
            title: "xUnit Test Patterns: Refactoring Test Code",
            author: "Gerard Meszaros",
            description: "Esta lectura permite comprender el funcionamiento de los frameworks de pruebas unitarias en general. Identifica las características que tienen en común estos framework y el modo en que operan. Entender estos aspectos es de utilidad para diseñar y escribir mejores pruebas unitarias.",
            coverImage: "images/xunit_test_patterns_book.png",
            link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005388007407681",
            chapters: ["Chapter 7. xUnit Basics"]
        },
        {
            title: "Patterns for Managing Source Code Branches",
            author: "Martin Fowler",
            description: "<ul><li>Para cada uno de los estilos de programación en pares, identifique un contexto en el cuál el estilo es beneficioso aplicarlo.</li><li>¿Porqué la técnica de pomodoro es útil cuando se realiza programación en pares?</li><li>¿Qué aspectos hay que tener en cuenta cuando se hace programación en pares de forma remota?</li></ul>",
            coverImage: "images/martin_fowler.png",
            link: "https://martinfowler.com/articles/branching-patterns.html",
        }
      ],
      5: [
        {
            title: "Patterns for Managing Source Code Branches",
            author: "Martin Fowler",
            description: "<p>Esta lectura se enfoca en diferentes patrones para utilizar ramificaciones de código de forma efectiva, favoreciendo la integración del trabajo de varios desarrolladores y los procesos de despliegue. Le recomendamos leer al menos hasta la sección Frecuencias de integración.</p><ul><li>¿Cómo afecta la frecuencia de integración de ramas cuando se utiliza el patrón de rama por característica?</li></ul>",
            coverImage: "images/martin_fowler.png",
            link: "https://martinfowler.com/articles/branching-patterns.html",
        }
      ],
      6: [
        {
            title: "Clean Code Fundamentals",
            author: "Robert C. Martin",
            description: "<p>En este video Robert Martin hace una demostración de como utilizando TDD se puede hacer diseño y desarrollo de una funcionalidad de forma incremental. A lo largo de la demostración se discuten varios aspectos que inquietan comúnmente a los desarrolladores cuando empiezan a usar TDD. El video hace parte de la serie de videos de Clean Coders. Antes de ver el video, haga una lista de preguntas o dudas que le genera la aplicación de TDD a partir del trabajo realizado la semana anterior. Observe el video y analice las respuestas a sus preguntas que encontró en el video.</p>",
            coverImage: "images/clean_code_video_series_cover.png",
            link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005390072807681",
            chapters: ["TDD Part, Part 2"]
        }
      ],
      7: [
        {
            title: "Continuous Delivery: Anatomy of the Deployment Pipeline",
            author: "Jez Humble and David Farley",
            description: "<p>En esta lectura se profundizan los conceptos sobre la definición e implementación de pipelines para realizar integración y despliegue continuo de código. Se presentan algunos modelos de procesos usados comunmente y se revisan las prácticas recomendadas para lograr los mejores beneficios.</p>",
            coverImage: "images/continuous_delivery_book.png",
            link: "https://www.informit.com/articles/article.aspx?p=1621865"
        }
      ],
      8: [
        {
            title: "The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations",
            author: "Gene Kim, Patrick Debois, John Willis, Jez Humble, John Allspaw",
            description: "<ul><li>En el proceso de desarrollo y operaciones ¿cuáles son los problemas que DevOps intenta resolver?</li><li>¿Cuales son los retos que una organización enfrenta para implementar las prácticas de DevOps?</li><li>¿Cuál es la diferencia entre integración continua, entrega continua y despliegue continuo?</li></ul>",
            coverImage: "images/devops_handbook_book.png",
            link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005388801607681",
            chapters: ["Chapter 1. Agile, Continuous Delivery, and the Three Ways","Chapter 2. The First Way: The Principles of Flow","Chapter 3. The Second Way: The Principles of Feedback","Chapter 4. The Third Way: The Principles of Continual Learning and Experimentation"]
        }
      ]
    }
  },
  class2: {
    name: "MISW 4102 Principios de diseño y arquitectura de software",
    weeks: {}
  },
  class3: {
    name: "MISW 4103 Pruebas automatizadas",
    weeks: {}
  },
  class4: {
    name: "MISW 4104 Ingeniería de software para la web",
    weeks: {}
  }
};
