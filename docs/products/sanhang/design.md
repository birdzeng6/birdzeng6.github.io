# The Design of SanHang

The design of SanHang is the heart of the product. It was born from a personal need and a deep appreciation for the traditions of Chinese writing, and every design decision was made to serve that singular vision.

## The Spark: An Idea from the Past

The idea for SanHang came from a personal frustration that grew into an obsession. I was practicing calligraphy from copybooks and reading ancient Chinese texts, and I felt a growing disconnect. The classical way of writing—vertically, from top to bottom, right to left—felt mindful and deliberate. The modern digital world, however, was exclusively horizontal.

I wanted a way to practice and immerse myself in this traditional format in my daily life, but no such tool existed. I searched for an app or platform that would let me read and write vertically, but found nothing.

As a last resort, I made a decision: I would build it myself. I wanted to create a tool that I would genuinely use, believing that if it was useful to me, it would be useful to others who shared my passion.

## My Guiding Principles: The Five Goals

From the very beginning, I wasn't trying to reinvent social media. I was trying to create a specific, focused experience. To stay on track, I set five non-negotiable goals for the product:

1. **A True Vertical Interface:** The app must be interacted with vertically. Text must flow from top to bottom, and new columns must appear from right to left.

2. **Focus on Traditional Chinese:** It must exclusively display Traditional Chinese to create a fully immersive experience.

3. **Cultural Authenticity:** It should use the traditional Chinese calendar (heavenly stems and earthly branches), not just the Gregorian calendar.

4. **Simplicity First:** It should only have the most basic interactions: post, like, and comment. No complex, distracting features.

5. **Words Must Have Weight:** It must not allow deletion.

This last point was the most important. In the ancient world, writing on bamboo slips with ink was permanent. A mistake couldn't be easily erased. I felt that modern digital culture had lost this sense of permanence, leading to thoughtless expression. I wanted to bring back that intentionality.

## Bringing the Vision to Life: The Design Process

As the product owner and sole designer, I was in charge of translating these principles into a living app. This was a unique challenge, as in 2015, there were no other products to reference for a fully vertical, right-to-left interface.

My design was built on three pillars:

### 1. Style & Atmosphere

I wanted the app to feel less like a modern "feed" and more like opening an ancient book.

* **Layout:** The layout is clean, minimalist, and draws inspiration from the balance and whitespace of Chinese ink paintings.

* **Fonts:** The choice of font was critical. I selected two classical fonts with rich histories: Slender Gold (瘦金體), created by Emperor Huizong of the Song dynasty, and Wei Bei (魏碑體) from the Northern Wei dynasty.

### 2. A New Interaction Model

The core of the experience is its unique interaction.

* **Vertical Flow:** Unlike any other app, users swipe right to read new content, not up. To read a single post, their eyes travel naturally from top to bottom, column by column.

* **Thoughtful Expression:** To achieve the "No Deletion" goal, we implemented a strikethrough. Just as one would in an ink-written manuscript, mistakes are crossed out but remain visible. This creates an honest, visible record of the thought process, rather than letting it vanish.

### 3. Seamless Immersion

To ensure the experience was never broken, I designed two key components that would work automatically in the background:

* **Character Conversion:** A component that automatically converts any Simplified Chinese input into the correct Traditional Chinese characters.

* **Traditional Calendar:** A component that displays the date and time using the traditional heavenly stems and earthly branches, reinforcing the app's classical feel.