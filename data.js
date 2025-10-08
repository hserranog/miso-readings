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
          obligatoryReadings: ["Chapter 5. Requirements and User Stories"],
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
            obligatoryReadings: ["Chapter 7. xUnit Basics"],
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
            obligatoryReadings: ["TDD Part, Part 2"],
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
            obligatoryReadings: ["Chapter 1. Agile, Continuous Delivery, and the Three Ways","Chapter 2. The First Way: The Principles of Flow","Chapter 3. The Second Way: The Principles of Feedback","Chapter 4. The Third Way: The Principles of Continual Learning and Experimentation"]
        }
      ]
    }
  },
  class2: {
    name: "MISW 4102 Principios de diseño y arquitectura de software",
    weeks: {
      1: [
          {
            title: "Software Architecture in Practice, 4th Edition",
            author: "Len Bass, Paul Clements, Rick Kazman",
            coverImage: "images/software_architecture_in_practice_book.png",
            link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1sib6to/alma991005389583407681",
            obligatoryReadings: ["Chapter 1. What Is Software Architecture?"],
            optionalReadings: ["Chapter 2. Why Is Software Architecture Important?"]
          },
          {
            title: "Design It!: From Programmer to Software Architect",
            author: "Michael Keeling",
            coverImage: "images/design_it_book.png",
            link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005389009907681",
            obligatoryReadings: ["Chapter 2. Design Thinking Fundamentals"],
          }
      ],
      2: [
        {
          title: "Software Architecture in Practice, 4th Edition",
          author: "Len Bass, Paul Clements, Rick Kazman",
          coverImage: "images/software_architecture_in_practice_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1sib6to/alma991005389583407681",
          obligatoryReadings: ["Chapter 3. Understanding Quality Attributes", "Chapter 19. Architecturally Significant Requirements / Section 19.4 Capturing ASRs in a Utility Tree"],
        },
      ],
      3: [
        {
          title: "Learning UML 2.0: A Pragmatic Introduction to UML",
          author: "Russ Miles, Kim Hamilton",
          coverImage: "images/learning_uml_2_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005388330407681",
          obligatoryReadings: ["Chapter 1. Introduction", "Chapter 4. Modeling a System's Logical Structure: Introducing Classes and Class Diagrams", "Chapter 12. Managing and Reusing Your System's Parts: Component Diagrams", "Chapter 15. Modeling Your Deployed System: Deployment Diagrams"],
        },
        {
          title: "Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives",
          author: "Nick Rozanski, Eóin Woods",
          coverImage: "images/software_systems_architecture.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1sib6to/alma991005389031007681",
          obligatoryReadings: ["Chapter 15. Introduction to the Viewpoint Catalog", "Chapter 16. The Context Viewpoint", "Chapter 17. The Functional Viewpoint", "Chapter 21. The Deployment Viewpoint"],
        }
      ],
      4: [
        {
          title: "Documenting Software Architectures: Views and Beyond",
          author: "Paul Clements, Felix Bachmann, Len Bass, David Garlan, James Ivers, Reed Little, Paulo Merson, Robert Nord, Judith Stafford",
          coverImage: "images/documenting_software_architectures.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005387216907681",
          obligatoryReadings: ["Chapter 1. Module Views", "Chapter 2. A Tour of Some Module Styles / 2.4 Layered Style", "Chapter 3. Component-and-Connector Views", "Chapter 4. A Tour of Some Component-and-Connector Styles / 4.3 Call-Return Styles", "Chapter 4. A Tour of Some Component-and-Connector Styles / 4.4 Event-Based Styles", "Chapter 5. Allocation Views and a Tour of Some Allocation Styles / 5.1 Overview", "Chapter 5. Allocation Views and a Tour of Some Allocation Styles / 5.2 Deployment Style"],
          optionalReadings: ["Chapter 2. A Tour of Some Module Styles", "Chapter 4. A Tour of Some Component-and-Connector Styles", "Chapter 5. Allocation Views and a Tour of Some Allocation Styles"]
        }
      ],
      5: [
        {
          title: "Software Architecture in Practice, 4th Edition",
          author: "Len Bass, Paul Clements, Rick Kazman",
          coverImage: "images/software_architecture_in_practice_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1sib6to/alma991005389583407681",
          obligatoryReadings: ["Chapter 9. Performance / 9.2 Tactics for Performance"],
          optionalReadings: ["Chapter 9. Performance / 9.1 Performance General Scenario", "Chapter 9. Performance / 9.3 Tactics-Based Questionnaire for Performance", "Chapter 9. Performance / 9.4 Patterns for Performance"]
        },
        {
          title: "Design Patterns: Elements of Reusable Object-Oriented Software",
          author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
          coverImage: "images/design_patterns_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005388311107681",
          obligatoryReadings: ["Chapter 3. Creational Patterns / Object Creational: Singleton", "Chapter 4. Structural Patterns / Object Structural: Facade", "Chapter 5. Behavioral Patterns / Object Behavioral: Mediator"],
        },
        {
          title: "Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and Iterative Development",
          author: "Craig Larman",
          coverImage: "images/appying_uml_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005388174307681",
          obligatoryReadings: ["Chapter 17. GRASP: Designing Objects with Responsibilities / Creator", "Chapter 17. GRASP: Designing Objects with Responsibilities / Low Coupling", "Chapter 17. GRASP: Designing Objects with Responsibilities / High Cohesion"],
          optionalReadings: ["Chapter 17. GRASP: Designing Objects with Responsibilities"]
        },
        {
          title: "The Principles of OOD",
          author: "Rob Martin",
          coverImage: "",
          link: "http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod",
          obligatoryReadings: ["SRP", "DIP"],
        }
      ],
      6: [
        {
          title: "Software Architecture in Practice, 4th Edition",
          author: "Len Bass, Paul Clements, Rick Kazman",
          coverImage: "images/software_architecture_in_practice_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1sib6to/alma991005389583407681",
          obligatoryReadings: ["Chapter 8. Modifiability / 8.2 Tactics for Modifiability"],
          optionalReadings: ["Chapter 8. Modifiability"]
        },
        {
          title: "The Model-View-Controller (MVC) Its Past and Present",
          author: "Trygve Reenskaug, University of Oslo",
          coverImage: "",
          link: "https://folk.universitetetioslo.no/trygver/2003/javazone-jaoo/MVC_pattern.pdf"
        },
        {
          title: "Patterns - WPF Apps With The Model-View-ViewModel Design Pattern",
          author: "Josh Smith",
          coverImage: "",
          link: "https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/february/patterns-wpf-apps-with-the-model-view-viewmodel-design-pattern"
        },
        {
          title: "GUI Architectures / Model View Controller",
          author: "Martin Fowler",
          coverImage: "images/martin_fowler.png",
          link: "https://www.martinfowler.com/eaaDev/uiArchs.html#ModelViewController",
          requiredReadings: ["Model View Controller"]
        },
        {
          title: "The Evolution of MVC",
          author: "Stephen Walther",
          coverImage: "",
          link: "http://stephenwalther.com/archive/2008/08/24/the-evolution-of-mvc",
        }
      ],
      7: [
        {
          title: "Clean Code in Python: Develop maintainable and efficient code, 2nd Edition",
          author: "Mariano Anaya",
          coverImage: "images/clean_code_in_python_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005390532207681",
          obligatoryReadings: ["Chapter 4. The SOLID Principles"],
        },
        {
          title: "The Principles of OOD",
          author: "Rob Martin",
          coverImage: "",
          link: "http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod",
        }
      ],
      8: [
        {
          title: "The LMAX Architecture",
          author: "Martin Fowler",
          coverImage: "images/martin_fowler.png",
          link: "https://martinfowler.com/articles/lmax.html"
        },
        {
          title: "Software Architecture in Action",
          author: "Flavio Oquendo, Jair Leite Thaís Batista",
          coverImage: "images/software_architecture_in_action.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005727669907681",
          obligatoryReadings: ["Chapter 9. Designing Modi ability in Software Architectures"],
        },
      ],
    }
  },
  class3: {
    name: "MISW 4103 Pruebas automatizadas",
    weeks: {}
  },
  class4: {
    name: "MISW 4104 Ingeniería de software para la web",
    weeks: {
      1: [
        {
          title: "Single Page Application: Un viaje a las SPA a través de Angular y JavaScript",
          author: "@davidjguru",
          description: "<ul><li>En qué consiste un escenario Server Side Rendering (SSR)</li><li>Cómo se modificó ese escenario con la aparición de AJAX</li><li>Cómo se caracteriza “filosóficamente” una SPA</li><li>Cuáles son las claves fundamentales de una SPA</li><li>En qué consiste Web Storage API</li></ul>",
          link: "https://medium.com/@davidjguru/single-page-application-un-viaje-a-las-spa-a-trav%C3%A9s-de-angular-y-javascript-337a2d18532"
        },
        {
          title: "Designing Web Usability: The Practice of Simplicity",
          author: "Jakob Nielsen",
          coverImage: "images/designing_web_usability_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1g0omtq/alma991005387922307681"
        },
        {
          title: "Designing Interfaces: Patterns for Effective Interaction Design",
          author: "Jenifer Tidwell",
          coverImage: "images/designing_interfaces_book.png",
          link: "https://uniandes.primo.exlibrisgroup.com/permalink/57U_UDLA/1sib6to/alma991005386759207681"
        }
      ]
    }
  }
};
