// Timeline Component - Vanilla JS version
(function() {
  const timelineData = [
    {
      title: "2025",
      content: `
        <div>
          <p class="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm font-normal mb-4">
            <strong class="text-primary">IT Intern — Eridu AI</strong><br>
            Manage internal network servers to keep devices online and stable. Configure static IPs, handle endpoint conflicts, and maintain secure, reliable connectivity across the company.
          </p>
          <p class="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm font-normal mb-4">
            <strong class="text-primary">Desktop Support Specialist — Cisco</strong><br>
            Supported Windows, macOS, and mobile systems on site. Resolved hardware and software issues to reduce downtime and improve productivity for employees across the organization.
          </p>
          <p class="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm font-normal mb-8">
            <strong class="text-primary">Transferred to UC Santa Cruz to pursue a BS in Computer Science</strong><br>
            Moved into upper-division CS courses and continued specializing in systems, cloud, and AI technologies.
          </p>
        </div>
      `
    },
    {
      title: "2024",
      content: `
        <div>
          <p class="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm font-normal mb-4">
            <strong class="text-primary">Completed my IT Help Desk Internship at Synopsys</strong><br>
            Handled device setup, troubleshooting, ServiceNow logging, printer diagnostics, and networking tasks. Helped onboard employees and kept internal systems running smoothly.
          </p>
          <p class="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm font-normal mb-8">
            <strong class="text-primary">Continued building AI and engineering projects</strong><br>
            Developed agent-based systems, backend tools, and cloud integrations while participating in hackathons and community tech events.
          </p>
        </div>
      `
    },
    {
      title: "2023",
      content: `
        <div>
          <p class="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm font-normal mb-4">
            <strong class="text-primary">Student at De Anza College — Associate in Computer Science Transfer</strong><br>
            Built a strong foundation in algorithms, programming, data structures, and math.
          </p>
          <p class="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm font-normal mb-8">
            <strong class="text-primary">Cashier — Curry Pizza House</strong><br>
            Delivered customer service, resolved issues quickly, and maintained a welcoming environment for guests.
          </p>
        </div>
      `
    },
    {
      title: "2022",
      content: `
        <div>
          <p class="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm font-normal mb-8">
            <strong class="text-primary">Cashier — Trail Dust BBQ</strong><br>
            Worked in a fast paced environment handling transactions, customer interactions, and store operations.
          </p>
        </div>
      `
    },
    {
      title: "2021 and earlier",
      content: `
        <div>
          <p class="text-foreground/80 dark:text-foreground/70 text-xs md:text-sm font-normal mb-8">
            <strong class="text-primary">Started my early work journey</strong><br>
            Gained first experience in customer facing roles, learning communication, responsibility, and teamwork.
          </p>
        </div>
      `
    }
  ];

  function initTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) {
      console.warn('Timeline container not found');
      return;
    }
    
    // Clear any existing content
    timelineContainer.innerHTML = '';

    // Create timeline structure - vertical layout
    const timelineHTML = `
      <div class="relative max-w-7xl mx-auto pb-20">
        <div class="timeline-line absolute md:left-8 left-8 top-0 w-[2px] bg-gradient-to-b from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div class="timeline-progress absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full transition-all duration-300" style="height: 0%; opacity: 0;"></div>
        </div>
        ${timelineData.map((item, index) => `
          <div class="timeline-entry relative flex flex-col md:flex-row justify-start items-start pt-10 md:pt-20 md:gap-10 mb-10 md:mb-20" data-index="${index}">
            <div class="sticky flex flex-col md:flex-row z-40 items-start md:items-center top-40 self-start md:w-64 lg:w-80 flex-shrink-0">
              <div class="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center z-50">
                <div class="timeline-dot h-4 w-4 rounded-full bg-muted border border-border p-2" />
              </div>
              <h3 class="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground whitespace-nowrap">
                ${item.title}
              </h3>
            </div>
            <div class="relative pl-20 pr-4 md:pl-4 md:flex-1 w-full">
              <h3 class="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
                ${item.title}
              </h3>
              <div class="timeline-content">${item.content}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    timelineContainer.innerHTML = timelineHTML;

    // Initialize scroll animation
    const timelineLine = timelineContainer.querySelector('.timeline-line');
    const timelineProgress = timelineContainer.querySelector('.timeline-progress');
    const entries = timelineContainer.querySelectorAll('.timeline-entry');

    if (!timelineLine || !timelineProgress) return;

    // Calculate total height - wait for layout
    const updateHeight = () => {
      // Force a reflow to ensure elements are laid out
      void timelineContainer.offsetHeight;
      
      // Get the container that holds all entries
      const entriesContainer = timelineContainer.querySelector('.relative.max-w-7xl');
      if (!entriesContainer) return;
      
      // Calculate total height from all entries plus spacing
      let totalHeight = 0;
      entries.forEach((entry, index) => {
        totalHeight += entry.offsetHeight;
        if (index < entries.length - 1) {
          totalHeight += 40; // Add spacing between entries
        }
      });
      
      // Set the timeline line height to match the content
      if (totalHeight > 0) {
        timelineLine.style.height = totalHeight + 'px';
      }
    };

    // Wait for initial render and images to load
    setTimeout(updateHeight, 200);
    setTimeout(updateHeight, 500);
    window.addEventListener('resize', updateHeight);
    
    // Update height when images load
    const images = timelineContainer.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('load', updateHeight);
    });

    // Scroll progress calculation
    function updateTimelineProgress() {
      const containerRect = timelineContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      
      // Calculate scroll progress based on viewport
      const viewportTop = windowHeight * 0.1; // Start animation at 10% from top
      const viewportBottom = windowHeight * 0.5; // End animation at 50% from bottom
      
      let progress = 0;
      const scrollStart = containerTop - viewportTop;
      const scrollEnd = containerTop + containerHeight - (windowHeight - viewportBottom);
      
      if (scrollStart <= 0 && scrollEnd >= 0) {
        // We're in the scroll range
        const scrolled = -scrollStart;
        const totalScroll = scrollEnd - scrollStart;
        progress = Math.min(Math.max(scrolled / totalScroll, 0), 1);
      } else if (scrollStart > 0) {
        progress = 0;
      } else {
        progress = 1;
      }
      
      const lineHeight = timelineLine.offsetHeight || containerHeight;
      const progressHeight = lineHeight * progress;
      
      timelineProgress.style.height = progressHeight + 'px';
      timelineProgress.style.opacity = Math.min(progress * 3, 1).toString();
    }

    // Update on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateTimelineProgress();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial update
    updateTimelineProgress();

    // Animate entries on scroll
    const entryObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(20px)';
          setTimeout(() => {
            entry.target.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 100);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    entries.forEach(entry => {
      entryObserver.observe(entry);
    });
  }

  // Expose initTimeline globally for manual initialization if needed
  window.initTimeline = initTimeline;

  // Initialize when DOM is ready
  function startInit() {
    // Wait a bit to ensure DOM is fully ready
    setTimeout(() => {
      initTimeline();
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startInit);
  } else {
    startInit();
  }
})();

