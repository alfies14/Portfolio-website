// Portfolio Chatbot for Alfredo Rodriguez Flores
// A smart chatbot that answers questions about Alfredo's experience and skills

const chatbotKnowledge = {
    name: "Alfredo Rodriguez Flores",
    email: "diazfloresj100@gmail.com",
    github: "https://github.com/alfies14",
    linkedin: "https://www.linkedin.com/in/alfredo-rodriguez-flores-152462281/",
    school: "UC Santa Cruz",
    major: "Computer Science (BS)",
    
    experience: [
        {
            title: "IT Intern",
            company: "Eridu AI",
            year: "2025",
            description: "Managing internal network servers, configuring static IPs, handling endpoint conflicts, and maintaining secure connectivity."
        },
        {
            title: "Desktop Support Specialist",
            company: "Cisco",
            year: "2025",
            description: "Supporting Windows, macOS, and mobile systems. Resolving hardware and software issues to reduce downtime."
        },
        {
            title: "IT Help Desk Intern",
            company: "Synopsys",
            year: "2024",
            description: "Device setup, troubleshooting, ServiceNow logging, printer diagnostics, networking tasks, and employee onboarding."
        }
    ],
    
    skills: [
        "Network Administration",
        "IT Support",
        "Windows & macOS",
        "Troubleshooting",
        "ServiceNow",
        "Cloud Technologies",
        "AI/ML",
        "Python",
        "JavaScript",
        "HTML/CSS"
    ],
    
    interests: [
        "Systems & Cloud",
        "AI Technologies",
        "Backend Development",
        "Hackathons"
    ]
};

// Chatbot responses based on keywords
function getResponse(message) {
    const msg = message.toLowerCase().trim();
    
    // Greetings
    if (msg.match(/^(hi|hello|hey|howdy|greetings|yo|sup)/)) {
        return `Hey there! 👋 I'm Alfredo's portfolio assistant. I can tell you about his experience, skills, education, or how to contact him. What would you like to know?`;
    }
    
    // Name questions
    if (msg.match(/who (is|are you|is alfredo)|what('s| is) (your|his) name/)) {
        return `I'm an AI assistant for ${chatbotKnowledge.name}, a Computer Science student at ${chatbotKnowledge.school}. He's currently interning at Eridu AI and has experience at Cisco and Synopsys!`;
    }
    
    // Education
    if (msg.match(/school|university|college|education|study|degree|major|ucsc|santa cruz/)) {
        return `📚 Alfredo is pursuing a **BS in Computer Science** at **UC Santa Cruz**. He transferred there in 2025 after completing his Associate's degree at De Anza College.`;
    }
    
    // Current work / Eridu AI
    if (msg.match(/current|now|eridu|doing|work(ing)?/)) {
        return `💼 Currently, Alfredo is an **IT Intern at Eridu AI** (a startup). He manages internal network servers, configures static IPs, handles endpoint conflicts, and maintains secure connectivity across the company.`;
    }
    
    // Experience / Jobs
    if (msg.match(/experience|job|work|career|intern|cisco|synopsys|companies/)) {
        let response = `💼 Here's Alfredo's experience:\n\n`;
        chatbotKnowledge.experience.forEach(exp => {
            response += `**${exp.title}** at ${exp.company} (${exp.year})\n${exp.description}\n\n`;
        });
        return response;
    }
    
    // Skills
    if (msg.match(/skill|tech|know|can (he|you) do|technologies|programming|language/)) {
        return `🛠️ Alfredo's skills include:\n\n${chatbotKnowledge.skills.map(s => `• ${s}`).join('\n')}\n\nHe's passionate about systems, cloud technologies, and AI!`;
    }
    
    // Contact
    if (msg.match(/contact|email|reach|hire|connect|linkedin|github|social/)) {
        return `📬 You can reach Alfredo through:\n\n📧 **Email:** ${chatbotKnowledge.email}\n💼 **LinkedIn:** [View Profile](${chatbotKnowledge.linkedin})\n💻 **GitHub:** [View Projects](${chatbotKnowledge.github})\n\nHe's always open to new opportunities and collaborations!`;
    }
    
    // Resume
    if (msg.match(/resume|cv|download/)) {
        return `📄 You can view Alfredo's resume by clicking the **Resume** link in the navigation bar at the top of the page!`;
    }
    
    // Projects
    if (msg.match(/project|portfolio|built|create|made|coding/)) {
        return `🚀 Alfredo has worked on various projects including:\n\n• Agent-based AI systems\n• Backend tools and APIs\n• Cloud integrations\n• Interactive web applications\n\nCheck out his **GitHub** for more: ${chatbotKnowledge.github}`;
    }
    
    // Interests
    if (msg.match(/interest|passion|hobby|like|enjoy|love/)) {
        return `🌟 Alfredo is passionate about:\n\n${chatbotKnowledge.interests.map(i => `• ${i}`).join('\n')}\n\nHe actively participates in hackathons and community tech events!`;
    }
    
    // Thanks
    if (msg.match(/thank|thanks|thx|appreciate/)) {
        return `You're welcome! 😊 Is there anything else you'd like to know about Alfredo?`;
    }
    
    // Goodbye
    if (msg.match(/bye|goodbye|see you|later|cya/)) {
        return `Goodbye! 👋 Feel free to come back anytime. Don't forget to check out Alfredo's GitHub and LinkedIn!`;
    }
    
    // Help
    if (msg.match(/help|what can you|options|commands/)) {
        return `I can help you learn about Alfredo! Try asking about:\n\n• His **experience** and work history\n• His **skills** and technologies\n• His **education** and school\n• How to **contact** him\n• His **projects** and interests\n\nJust type your question naturally!`;
    }
    
    // Default response
    return `Hmm, I'm not sure about that! 🤔 Try asking about Alfredo's **experience**, **skills**, **education**, or how to **contact** him. Or type "help" to see what I can answer!`;
}

// Simple markdown parser for chat messages
function parseMarkdown(text) {
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>')
        .replace(/\n/g, '<br>');
}

// Initialize chatbot
function initChatbot() {
    // Create chatbot HTML
    const chatbotHTML = `
        <div id="chatbot-container" class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <!-- Chat Window -->
            <div id="chatbot-window" class="hidden opacity-0 transform translate-y-4 transition-all duration-300 ease-out w-[360px] max-w-[calc(100vw-3rem)] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
                <!-- Header -->
                <div class="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold">Alfredo's Assistant</h3>
                            <p class="text-xs opacity-80">Ask me anything!</p>
                        </div>
                    </div>
                    <button id="chatbot-close" class="p-1 hover:bg-primary-foreground/20 rounded-lg transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Messages -->
                <div id="chatbot-messages" class="h-80 overflow-y-auto p-4 space-y-4 bg-muted/30">
                    <!-- Welcome message -->
                    <div class="flex gap-3">
                        <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                            </svg>
                        </div>
                        <div class="bg-background border border-border rounded-2xl rounded-tl-md px-4 py-2 max-w-[80%]">
                            <p class="text-sm">Hey! 👋 I'm Alfredo's portfolio assistant. Ask me about his experience, skills, projects, or how to contact him!</p>
                        </div>
                    </div>
                </div>
                
                <!-- Input -->
                <div class="p-4 border-t border-border bg-background">
                    <form id="chatbot-form" class="flex gap-2">
                        <input 
                            type="text" 
                            id="chatbot-input" 
                            placeholder="Ask me anything..."
                            class="flex-1 px-4 py-2 bg-muted border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            autocomplete="off"
                        >
                        <button 
                            type="submit" 
                            class="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            
            <!-- Toggle Button -->
            <button id="chatbot-toggle" class="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                <svg id="chat-icon" class="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <svg id="close-icon" class="w-7 h-7 absolute transition-transform duration-300 scale-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <!-- Notification dot -->
                <span id="chatbot-notification" class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
            </button>
        </div>
    `;
    
    // Insert chatbot into page
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Get elements
    const container = document.getElementById('chatbot-container');
    const window = document.getElementById('chatbot-window');
    const toggle = document.getElementById('chatbot-toggle');
    const close = document.getElementById('chatbot-close');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');
    const chatIcon = document.getElementById('chat-icon');
    const closeIcon = document.getElementById('close-icon');
    const notification = document.getElementById('chatbot-notification');
    
    let isOpen = false;
    
    // Toggle chat window
    function toggleChat() {
        isOpen = !isOpen;
        
        if (isOpen) {
            window.classList.remove('hidden');
            setTimeout(() => {
                window.classList.remove('opacity-0', 'translate-y-4');
            }, 10);
            chatIcon.classList.add('scale-0');
            closeIcon.classList.remove('scale-0');
            notification.classList.add('hidden');
            input.focus();
        } else {
            window.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => {
                window.classList.add('hidden');
            }, 300);
            chatIcon.classList.remove('scale-0');
            closeIcon.classList.add('scale-0');
        }
    }
    
    toggle.addEventListener('click', toggleChat);
    close.addEventListener('click', toggleChat);
    
    // Add message to chat
    function addMessage(text, isUser = false) {
        const messageHTML = isUser ? `
            <div class="flex gap-3 justify-end">
                <div class="bg-primary text-primary-foreground rounded-2xl rounded-tr-md px-4 py-2 max-w-[80%]">
                    <p class="text-sm">${text}</p>
                </div>
            </div>
        ` : `
            <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                </div>
                <div class="bg-background border border-border rounded-2xl rounded-tl-md px-4 py-2 max-w-[80%]">
                    <p class="text-sm">${parseMarkdown(text)}</p>
                </div>
            </div>
        `;
        
        messages.insertAdjacentHTML('beforeend', messageHTML);
        messages.scrollTop = messages.scrollHeight;
    }
    
    // Typing indicator
    function showTyping() {
        const typingHTML = `
            <div id="typing-indicator" class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                </div>
                <div class="bg-background border border-border rounded-2xl rounded-tl-md px-4 py-3">
                    <div class="flex gap-1">
                        <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                        <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                        <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                    </div>
                </div>
            </div>
        `;
        messages.insertAdjacentHTML('beforeend', typingHTML);
        messages.scrollTop = messages.scrollHeight;
    }
    
    function hideTyping() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }
    
    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;
        
        // Add user message
        addMessage(text, true);
        input.value = '';
        
        // Show typing indicator
        showTyping();
        
        // Get response after delay
        setTimeout(() => {
            hideTyping();
            const response = getResponse(text);
            addMessage(response);
        }, 500 + Math.random() * 500);
    });
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('animate-pulse');
    }, 5000);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}

