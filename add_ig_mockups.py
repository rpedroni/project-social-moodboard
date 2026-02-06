#!/usr/bin/env python3
"""
Add Instagram profile mockups to each moodboard section.
"""

# Moodboard data: ID, name, highlight color
MOODBOARDS = [
    ("midnight-coral", "Midnight Coral", "#e94560"),
    ("hacker-mode", "Hacker Mode", "#00ff41"),
    ("luxe-tech", "Luxe Tech", "#d4af37"),
    ("clean-lab", "Clean Lab", "#2563eb"),
    ("warm-signal", "Warm Signal", "#ff6b35"),
    ("synthwave", "Synthwave", "#ff00ff"),  # gradient but we'll use primary
    ("natureza-digital", "Natureza Digital", "#2d6a4f"),
    ("mono", "Mono", "#000000"),
    ("alerta", "Alerta", "#facc15"),
    ("neon-pop", "Neon Pop", "#ec4899"),
    ("editorial-br", "Editorial BR", "#8b1a1a"),
    ("fresh-code", "Fresh Code", "#84cc16"),
    ("brasil-subtle", "Brasil Subtle", "#009c3b"),
    ("arctic-tech", "Arctic Tech", "#06b6d4"),
    ("terra-moderna", "Terra Moderna", "#ea580c"),
    ("brasil-hacker", "Brasil Hacker", "#39ff14"),
    ("monkey-labs", "Monkey Labs", "#7c3aed"),
    ("monkey-builds", "Monkey Builds", "#f97316"),
    ("monkey-tech", "Monkey Tech", "#06d6a0"),
    ("hacker-brasil", "Hacker Brasil", "#00ff41"),
]

def generate_ig_mockup(section_id, name, color):
    """Generate Instagram mockup HTML for a section."""
    # Determine text color based on section style
    text_color = "#f0f0f0"
    bg_color = "rgba(255, 255, 255, 0.03)"
    
    # Light backgrounds need dark text
    if section_id in ["clean-lab", "natureza-digital", "mono", "editorial-br", "monkey-labs"]:
        text_color = "#1a1a1a"
        bg_color = "rgba(0, 0, 0, 0.03)"
    
    return f'''
        <div class="ig-profile-mockup">
            <div class="ig-profile-container">
                <!-- Profile Header -->
                <div class="ig-profile-header">
                    <div class="ig-avatar" style="background: {color}; color: white;">RP</div>
                    <div class="ig-profile-info">
                        <div class="ig-username" style="color: {text_color};">@rpedroni</div>
                        <div class="ig-stats" style="color: {text_color}; opacity: 0.7;">
                            <span><strong>47</strong> posts</span>
                            <span><strong>9.9K</strong> followers</span>
                            <span><strong>892</strong> following</span>
                        </div>
                        <div class="ig-bio" style="color: {text_color}; opacity: 0.8;">
                            IA · Builds · Labs<br>
                            Construindo o futuro, 4h por vez
                        </div>
                    </div>
                </div>
                
                <!-- 3x3 Feed Grid -->
                <div class="ig-feed-grid">
                    <!-- Square 1: LAB card -->
                    <div class="ig-grid-item" style="background: {color}; color: white;">
                        <div class="ig-mini-badge">LAB 🧪</div>
                        <div class="ig-mini-title">cardápio.ia</div>
                    </div>
                    
                    <!-- Square 2: Photo overlay -->
                    <div class="ig-grid-item" style="background: linear-gradient(135deg, {color}40, {color}80);"></div>
                    
                    <!-- Square 3: Lição de IA -->
                    <div class="ig-grid-item" style="background: {color}; color: white;">
                        <div class="ig-mini-badge">LIÇÃO</div>
                        <div class="ig-mini-title">lição de ia #47</div>
                    </div>
                    
                    <!-- Square 4: Reel -->
                    <div class="ig-grid-item" style="background: linear-gradient(135deg, {color}60, {color}99);">
                        <div class="ig-reel-icon">▶</div>
                    </div>
                    
                    <!-- Square 5: RECAP -->
                    <div class="ig-grid-item" style="background: {color}; color: white;">
                        <div class="ig-mini-badge">RECAP</div>
                        <div class="ig-mini-title">5 verdades sobre IA</div>
                    </div>
                    
                    <!-- Square 6: Carousel -->
                    <div class="ig-grid-item" style="background: linear-gradient(135deg, {color}50, {color}90);">
                        <div class="ig-carousel-icon">□□</div>
                    </div>
                    
                    <!-- Square 7: SUNSET -->
                    <div class="ig-grid-item" style="background: {color}; color: white;">
                        <div class="ig-mini-badge">SUNSET</div>
                        <div class="ig-mini-title">cardápio.ia ☠️</div>
                    </div>
                    
                    <!-- Square 8: Photo -->
                    <div class="ig-grid-item" style="background: linear-gradient(135deg, {color}45, {color}85);"></div>
                    
                    <!-- Square 9: Lição variant -->
                    <div class="ig-grid-item" style="background: {color}; color: white;">
                        <div class="ig-mini-badge">LIÇÃO</div>
                        <div class="ig-mini-title">dica rápida</div>
                    </div>
                </div>
            </div>
        </div>
'''

def generate_feed_comparison_section():
    """Generate the feed comparison section with all 20 Instagram grids."""
    items = []
    for section_id, name, color in MOODBOARDS:
        items.append(f'''
            <a href="#{section_id}" class="feed-thumb">
                <div class="feed-thumb-grid">
                    <div style="background: {color};"></div>
                    <div style="background: linear-gradient(135deg, {color}40, {color}80);"></div>
                    <div style="background: {color};"></div>
                    <div style="background: linear-gradient(135deg, {color}60, {color}99);"></div>
                    <div style="background: {color};"></div>
                    <div style="background: linear-gradient(135deg, {color}50, {color}90);"></div>
                    <div style="background: {color};"></div>
                    <div style="background: linear-gradient(135deg, {color}45, {color}85);"></div>
                    <div style="background: {color};"></div>
                </div>
                <div class="feed-thumb-label" style="color: {color};">{name}</div>
            </a>
        ''')
    
    items_html = ''.join(items)
    
    return f'''
    <!-- Feed Comparison -->
    <section class="comparison-section" id="feed-comparison" style="border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
        <h2 class="comparison-title">Instagram Feed Preview</h2>
        <p style="text-align: center; color: #999; margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">
            Como ficaria o feed do Instagram com cada direção visual
        </p>
        <div class="feed-comparison-grid">
            {items_html}
        </div>
    </section>
'''

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Add CSS for Instagram mockups (before </style>)
    css = '''
        /* Instagram Profile Mockup */
        .ig-profile-mockup {
            max-width: 400px;
            margin: 3rem auto 0;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .ig-profile-container {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .ig-profile-header {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .ig-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.5rem;
            flex-shrink: 0;
        }
        
        .ig-profile-info {
            flex: 1;
        }
        
        .ig-username {
            font-weight: 700;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            color: #1a1a1a;
        }
        
        .ig-stats {
            display: flex;
            gap: 1rem;
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
            color: #1a1a1a;
        }
        
        .ig-stats span {
            white-space: nowrap;
        }
        
        .ig-stats strong {
            font-weight: 700;
        }
        
        .ig-bio {
            font-size: 0.8rem;
            line-height: 1.4;
            color: #1a1a1a;
        }
        
        .ig-feed-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2px;
            background: #e0e0e0;
        }
        
        .ig-grid-item {
            aspect-ratio: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .ig-mini-badge {
            font-size: 0.5rem;
            font-weight: 800;
            padding: 0.2rem 0.4rem;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
            margin-bottom: 0.3rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .ig-mini-title {
            font-size: 0.6rem;
            font-weight: 700;
            text-align: center;
            line-height: 1.2;
        }
        
        .ig-reel-icon,
        .ig-carousel-icon {
            font-size: 1.5rem;
            opacity: 0.8;
            color: white;
            font-weight: 900;
        }
        
        /* Feed Comparison Grid */
        .feed-comparison-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .feed-thumb {
            text-decoration: none;
            display: block;
            transition: transform 0.2s;
            border-radius: 12px;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.03);
            padding: 1rem;
        }
        
        .feed-thumb:hover {
            transform: scale(1.05);
        }
        
        .feed-thumb-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
            background: rgba(0, 0, 0, 0.2);
            margin-bottom: 0.75rem;
            border-radius: 6px;
            overflow: hidden;
        }
        
        .feed-thumb-grid > div {
            aspect-ratio: 1;
        }
        
        .feed-thumb-label {
            text-align: center;
            font-size: 0.75rem;
            font-weight: 700;
        }
        
        @media (max-width: 1200px) {
            .feed-comparison-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .feed-comparison-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .ig-profile-mockup {
                padding: 1rem;
            }
            
            .ig-avatar {
                width: 60px;
                height: 60px;
                font-size: 1.2rem;
            }
        }
    '''
    
    html = html.replace('</style>', css + '\n    </style>')
    
    # Add Instagram mockups to each section (before </section>)
    for section_id, name, color in MOODBOARDS:
        mockup = generate_ig_mockup(section_id, name, color)
        
        # Find the section and its closing tag
        section_start = html.find(f'id="{section_id}"')
        if section_start == -1:
            print(f"Warning: Section {section_id} not found!")
            continue
        
        # Find the closing </section> tag for this section
        # We'll search for the next </section> after the section start
        section_content_start = section_start
        next_section = html.find('<section', section_content_start + 1)
        
        if next_section == -1:
            # Last section - find the comparison section instead
            section_end = html.find('<!-- Comparison Grid', section_content_start)
        else:
            # Find </section> before next <section>
            section_end = html.rfind('</section>', section_content_start, next_section)
        
        if section_end == -1:
            print(f"Warning: Could not find closing tag for {section_id}!")
            continue
        
        # Insert mockup before </section>
        html = html[:section_end] + mockup + '\n    ' + html[section_end:]
    
    # Add feed comparison section before the existing comparison section
    comparison_marker = '<section id="comparison" class="comparison-section">'
    comparison_pos = html.find(comparison_marker)
    if comparison_pos != -1:
        feed_comp = generate_feed_comparison_section()
        html = html[:comparison_pos] + feed_comp + '\n    ' + html[comparison_pos:]
    else:
        print("Warning: Could not find comparison section marker!")
    
    # Write the updated HTML
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    
    print("✅ Successfully added Instagram mockups to all 20 moodboards!")
    print("✅ Added feed comparison section!")

if __name__ == '__main__':
    main()
