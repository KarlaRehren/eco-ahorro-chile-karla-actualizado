let isTyping = false;

document.addEventListener('DOMContentLoaded', () => {
    const $ = id => document.getElementById(id);
    const messagesContainer = $('messages');
    const messageInput = $('messageInput');
    const sendButton = $('sendButton');
    const actionButtons = document.querySelectorAll('.action-btn');
    const modal = $('consultaModal');
    const closeModal = document.querySelector('.close');
    const consultaForm = $('consultaForm');
    const typingIndicator = $('typingIndicator');

    const format = t => t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                         .replace(/\*(.*?)\*/g, '<em>$1</em>')
                         .replace(/\n/g, '<br>')
                         .replace(/•/g, '&bull;');

    const addMsg = (text, who) => {
        const div = document.createElement('div');
        div.className = `message ${who}-message`;
        div.innerHTML = format(text);
        messagesContainer.appendChild(div);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const showTyping = () => { if (typingIndicator && !isTyping) { typingIndicator.style.display = 'flex'; isTyping = true; } };
    const hideTyping = () => { if (typingIndicator && isTyping) { typingIndicator.style.display = 'none'; isTyping = false; } };

    const getResponse = q => db[q] || ["Lo siento, no tengo información sobre ese tema."];

    const processQuery = q => {
        showTyping();
        setTimeout(() => {
            hideTyping();
            let res = getResponse(q.toLowerCase());
            if (res === 'modal') {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                (Array.isArray(res) ? res : [res]).forEach(msg => addMsg(msg, 'bot'));
            }
        }, 1200 + Math.random() * 800);
    };

    const sendMessage = () => {
        const text = messageInput.value.trim();
        if (!text) return;
        addMsg(text, 'user');
        messageInput.value = '';
        processQuery(text);
    };

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

    actionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const query = btn.dataset.query;
            if (query === 'consulta gratuita') {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                addMsg(btn.textContent, 'user');
                processQuery(query);
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (consultaForm) {
        consultaForm.addEventListener('submit', e => {
            e.preventDefault();
            const fd = new FormData(consultaForm);
            addMsg(`Consulta gratuita de ${fd.get('nombre')}`, 'user');
            setTimeout(() => {
                addMsg(
                    `✅ **¡Consulta enviada exitosamente!**<br><br>` +
                    `Hola <strong>${fd.get('nombre')}</strong>, tu consulta ha sido recibida.<br><br>` +
                    `📧 <strong>Email:</strong> ${fd.get('email')}<br>` +
                    `🕐 <strong>Respuesta:</strong> 24-48 horas hábiles<br><br>` +
                    `¡Gracias por confiar en nosotros! ⚡`,
                    'bot'
                );
            }, 1000);
            consultaForm.reset();
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    setTimeout(() => {
        addMsg('¡Hola! Soy tu asesor eléctrico especializado en Chile 🇨🇱⚡<br><br>¿En qué puedo ayudarte hoy?', 'bot');
    }, 800);
});