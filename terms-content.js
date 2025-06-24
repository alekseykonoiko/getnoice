// Terms of Service content in multiple languages
const termsContent = {
    en: {
        sections: [
            {
                title: "1. Acceptance of Terms",
                content: "By downloading, accessing, or using Noice (\"the Service\"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service."
            },
            {
                title: "2. Use of the Service",
                content: "You must be at least 13 years old (or the minimum legal age in your country) to use Noice.",
                extra: "You agree not to use the Service for any unlawful or prohibited purpose, including but not limited to:",
                list: [
                    "Uploading harmful, abusive, or infringing content",
                    "Circumventing usage limits or fair use policies",
                    "Reselling, redistributing, or reverse-engineering the service",
                    "Using automation to create or process large-scale requests"
                ]
            },
            {
                title: "3. Account & Security",
                content: "You are responsible for maintaining the confidentiality of your login credentials and for any activity that occurs under your account. You must notify us immediately if you suspect unauthorized use."
            },
            {
                title: "4. Subscriptions and Billing",
                list: [
                    "Free and paid subscription tiers are available.",
                    "Paid plans include a monthly or annual quota for transcription or processing minutes.",
                    "Subscriptions renew automatically unless cancelled prior to the billing cycle.",
                    "Payments are handled by secure third-party processors.",
                    "Refunds are only issued where required by law or in limited cases at our discretion."
                ]
            },
            {
                title: "5. Ownership and Content Rights",
                list: [
                    "You retain ownership of your audio, transcripts, and notes.",
                    "By using the Service, you grant us a limited license to store and process your content solely for delivering the Service.",
                    "We do not claim ownership of user content, nor do we use it to train AI models."
                ]
            },
            {
                title: "6. Service Availability and Disclaimer",
                content: "The Service is provided \"as is\" and \"as available\" without warranties of any kind. We do not guarantee uninterrupted access, error-free operation, or perfect accuracy of the transcription or summarization features.",
                extra: "We reserve the right to modify or discontinue features without notice."
            },
            {
                title: "7. Termination",
                content: "You may stop using the Service at any time. We reserve the right to suspend or terminate access for violations of these Terms or misuse of the Service.",
                extra: "Upon termination, your content may be deleted according to our retention policy."
            },
            {
                title: "8. Limitation of Liability",
                content: "To the extent permitted by law, Noice shall not be liable for indirect, incidental, or consequential damages, or loss of data, arising out of your use of the Service."
            },
            {
                title: "9. Changes to the Terms",
                content: "We may update these Terms at any time. We will notify you of significant changes via email or in-app. Continued use constitutes acceptance of the updated Terms."
            },
            {
                title: "10. Contact",
                content: "If you have questions or concerns about these Terms, contact us at <a href=\"mailto:support@getnoice.app\" class=\"contact-email\">support@getnoice.app</a>."
            }
        ]
    },
    es: {
        sections: [
            {
                title: "1. Aceptación de los Términos",
                content: "Al descargar, acceder o usar Noice (\"el Servicio\"), acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo, no puede usar el Servicio."
            },
            {
                title: "2. Uso del Servicio",
                content: "Debe tener al menos 13 años (o la edad legal mínima en su país) para usar Noice.",
                extra: "Acepta no usar el Servicio para ningún propósito ilegal o prohibido, incluyendo pero no limitado a:",
                list: [
                    "Cargar contenido dañino, abusivo o infractor",
                    "Eludir límites de uso o políticas de uso justo",
                    "Revender, redistribuir o aplicar ingeniería inversa al servicio",
                    "Usar automatización para crear o procesar solicitudes a gran escala"
                ]
            },
            {
                title: "3. Cuenta y Seguridad",
                content: "Usted es responsable de mantener la confidencialidad de sus credenciales de inicio de sesión y de cualquier actividad que ocurra bajo su cuenta. Debe notificarnos inmediatamente si sospecha un uso no autorizado."
            },
            {
                title: "4. Suscripciones y Facturación",
                list: [
                    "Hay niveles de suscripción gratuitos y de pago disponibles.",
                    "Los planes de pago incluyen una cuota mensual o anual para minutos de transcripción o procesamiento.",
                    "Las suscripciones se renuevan automáticamente a menos que se cancelen antes del ciclo de facturación.",
                    "Los pagos son manejados por procesadores de pago seguros de terceros.",
                    "Los reembolsos solo se emiten cuando lo requiere la ley o en casos limitados a nuestra discreción."
                ]
            },
            {
                title: "5. Propiedad y Derechos de Contenido",
                list: [
                    "Usted conserva la propiedad de su audio, transcripciones y notas.",
                    "Al usar el Servicio, nos otorga una licencia limitada para almacenar y procesar su contenido únicamente para brindar el Servicio.",
                    "No reclamamos la propiedad del contenido del usuario, ni lo usamos para entrenar modelos de IA."
                ]
            },
            {
                title: "6. Disponibilidad del Servicio y Descargo de Responsabilidad",
                content: "El Servicio se proporciona \"tal cual\" y \"según disponibilidad\" sin garantías de ningún tipo. No garantizamos acceso ininterrumpido, operación sin errores o precisión perfecta de las funciones de transcripción o resumen.",
                extra: "Nos reservamos el derecho de modificar o descontinuar funciones sin previo aviso."
            },
            {
                title: "7. Terminación",
                content: "Puede dejar de usar el Servicio en cualquier momento. Nos reservamos el derecho de suspender o terminar el acceso por violaciones de estos Términos o mal uso del Servicio.",
                extra: "Al finalizar, su contenido puede ser eliminado según nuestra política de retención."
            },
            {
                title: "8. Limitación de Responsabilidad",
                content: "En la medida permitida por la ley, Noice no será responsable por daños indirectos, incidentales o consecuentes, o pérdida de datos, que surjan de su uso del Servicio."
            },
            {
                title: "9. Cambios a los Términos",
                content: "Podemos actualizar estos Términos en cualquier momento. Le notificaremos sobre cambios significativos por correo electrónico o en la aplicación. El uso continuado constituye la aceptación de los Términos actualizados."
            },
            {
                title: "10. Contacto",
                content: "Si tiene preguntas o inquietudes sobre estos Términos, contáctenos en <a href=\"mailto:support@getnoice.app\" class=\"contact-email\">support@getnoice.app</a>."
            }
        ]
    },
    ru: {
        sections: [
            {
                title: "1. Принятие условий",
                content: "Загружая, получая доступ или используя Noice («Сервис»), вы соглашаетесь соблюдать настоящие Условия использования. Если вы не согласны, вы не можете использовать Сервис."
            },
            {
                title: "2. Использование Сервиса",
                content: "Вам должно быть не менее 13 лет (или минимального законного возраста в вашей стране) для использования Noice.",
                extra: "Вы соглашаетесь не использовать Сервис для любых незаконных или запрещенных целей, включая, но не ограничиваясь:",
                list: [
                    "Загрузка вредоносного, оскорбительного или нарушающего права контента",
                    "Обход ограничений использования или политик справедливого использования",
                    "Перепродажа, распространение или обратная разработка сервиса",
                    "Использование автоматизации для создания или обработки крупномасштабных запросов"
                ]
            },
            {
                title: "3. Учетная запись и безопасность",
                content: "Вы несете ответственность за сохранение конфиденциальности ваших учетных данных и за любую деятельность, происходящую под вашей учетной записью. Вы должны немедленно уведомить нас, если подозреваете несанкционированное использование."
            },
            {
                title: "4. Подписки и выставление счетов",
                list: [
                    "Доступны бесплатные и платные уровни подписки.",
                    "Платные планы включают ежемесячную или годовую квоту на минуты транскрипции или обработки.",
                    "Подписки продлеваются автоматически, если не отменены до цикла выставления счетов.",
                    "Платежи обрабатываются защищенными сторонними процессорами.",
                    "Возврат средств производится только там, где это требуется по закону или в ограниченных случаях по нашему усмотрению."
                ]
            },
            {
                title: "5. Права собственности и контента",
                list: [
                    "Вы сохраняете право собственности на свои аудио, транскрипции и заметки.",
                    "Используя Сервис, вы предоставляете нам ограниченную лицензию на хранение и обработку вашего контента исключительно для предоставления Сервиса.",
                    "Мы не претендуем на право собственности на пользовательский контент и не используем его для обучения моделей ИИ."
                ]
            },
            {
                title: "6. Доступность сервиса и отказ от ответственности",
                content: "Сервис предоставляется «как есть» и «по мере доступности» без каких-либо гарантий. Мы не гарантируем бесперебойный доступ, безошибочную работу или идеальную точность функций транскрипции или резюмирования.",
                extra: "Мы оставляем за собой право изменять или прекращать функции без предварительного уведомления."
            },
            {
                title: "7. Прекращение",
                content: "Вы можете прекратить использование Сервиса в любое время. Мы оставляем за собой право приостановить или прекратить доступ за нарушения настоящих Условий или неправильное использование Сервиса.",
                extra: "После прекращения ваш контент может быть удален в соответствии с нашей политикой хранения."
            },
            {
                title: "8. Ограничение ответственности",
                content: "В той степени, в которой это разрешено законом, Noice не несет ответственности за косвенные, случайные или последующие убытки или потерю данных, возникающие в результате вашего использования Сервиса."
            },
            {
                title: "9. Изменения в Условиях",
                content: "Мы можем обновлять эти Условия в любое время. Мы уведомим вас о существенных изменениях по электронной почте или в приложении. Продолжение использования означает принятие обновленных Условий."
            },
            {
                title: "10. Контакты",
                content: "Если у вас есть вопросы или опасения по поводу этих Условий, свяжитесь с нами по адресу <a href=\"mailto:support@getnoice.app\" class=\"contact-email\">support@getnoice.app</a>."
            }
        ]
    }
};