import type { QuestionItem } from "@/lib/types/care";

export const QUESTIONS: QuestionItem[] = [
  {
    id: "q1",
    title:
      "On your way home, you notice a small box gently shaking under a streetlight. What do you think is inside?",
    options: [
      // Normal options
      {
        id: "q1_plant",
        label: "A small potted plant with dry, withering leaves",
        type: "plant",
      },
      {
        id: "q1_turtle",
        label: "A tiny turtle pulling its head back in fear",
        type: "turtle",
      },
      {
        id: "q1_cat",
        label: "The faint silhouette of a cat, its eyes quietly glowing",
        type: "cat",
      },
      {
        id: "q1_dog",
        label: "A frightened puppy, its tail frozen mid-wag",
        type: "dog",
      },
      {
        id: "q1_rabbit",
        label: "A baby rabbit trembling, only its ears visible",
        type: "rabbit",
        isCoreRabbit: true,
      },

      // Weird options
      { id: "q1_w1", label: "A portable speaker that suddenly starts singing", type: "weird" },
      { id: "q1_w2", label: "A bundle of machine parts blinking like eyes", type: "weird" },
      { id: "q1_w3", label: "An ancient stone covered in strange symbols", type: "weird" },
      { id: "q1_w4", label: "A slime-like creature that looks vaguely alien", type: "weird" },
      { id: "q1_w5", label: "The sound of someone coughing from inside", type: "weird" },
      { id: "q1_w6", label: "A small crystal glowing softly on its own", type: "weird" },
      { id: "q1_w7", label: "An empty box… except it feels strangely warm", type: "weird" },
      { id: "q1_w8", label: "A shadow that twitches, then freezes", type: "weird" },
      { id: "q1_w9", label: "Something with an indescribable smell", type: "weird" },
      { id: "q1_w10", label: "Something like a doll that seems half alive", type: "weird" },
    ],
  },

  {
    id: "q2",
    title:
      "The being inside the box looks up at you. What is your first reaction?",
    options: [
      {
        id: "q2_plant",
        label: "Quietly tidy the surroundings to create a calm environment",
        type: "plant",
      },
      {
        id: "q2_turtle",
        label: "Step back instinctively, feeling unsure",
        type: "turtle",
      },
      {
        id: "q2_cat",
        label: "Observe carefully and blink slowly to show calmness",
        type: "cat",
      },
      {
        id: "q2_dog",
        label: "Speak gently in a low voice, saying it’s okay",
        type: "dog",
      },
      {
        id: "q2_rabbit",
        label: "Hold your breath and slowly extend the back of your hand",
        type: "rabbit",
        isCoreRabbit: true,
      },

      { id: "q2_w1", label: "Start whispering in an ASMR-like voice", type: "weird" },
      { id: "q2_w2", label: "Shake a piece of candy from your pocket", type: "weird" },
      { id: "q2_w3", label: "Pull out your phone and start filming immediately", type: "weird" },
      { id: "q2_w4", label: "Suddenly strike a yoga pose for no reason", type: "weird" },
      { id: "q2_w5", label: "Play meditation music for the box", type: "weird" },
      { id: "q2_w6", label: "Give the being a name on the spot", type: "weird" },
      { id: "q2_w7", label: "Believe this is some kind of divine test", type: "weird" },
      { id: "q2_w8", label: "Greet it in three different languages", type: "weird" },
      { id: "q2_w9", label: "Ask what kind of music it likes", type: "weird" },
      { id: "q2_w10", label: "Take a selfie first", type: "weird" },
    ],
  },

  {
    id: "q3",
    title: "The being is trembling. How do you try to calm it down?",
    options: [
      {
        id: "q3_plant",
        label: "Adjust the temperature and create a quiet, stable space",
        type: "plant",
      },
      {
        id: "q3_turtle",
        label: "Keep your distance and wait patiently",
        type: "turtle",
      },
      {
        id: "q3_cat",
        label: "Avoid touching and soothe it through sound and atmosphere",
        type: "cat",
      },
      {
        id: "q3_dog",
        label: "Bring a warm blanket or physical comfort",
        type: "dog",
      },
      {
        id: "q3_rabbit",
        label: "Lower yourself slowly and offer your presence without touching",
        type: "rabbit",
        isCoreRabbit: true,
      },

      { id: "q3_w1", label: "Start singing a lullaby out loud", type: "weird" },
      { id: "q3_w2", label: "Light every scented candle you own", type: "weird" },
      { id: "q3_w3", label: "Ask if it wants to breathe together", type: "weird" },
      { id: "q3_w4", label: "Interview it in a soft ASMR tone", type: "weird" },
      { id: "q3_w5", label: "Draw mysterious circles around the box", type: "weird" },
      { id: "q3_w6", label: "Play classical music through a smart speaker", type: "weird" },
      { id: "q3_w7", label: "Do stretching together for stress relief", type: "weird" },
      { id: "q3_w8", label: "Narrate the moment like a movie prologue", type: "weird" },
      { id: "q3_w9", label: "Ask for its personality type", type: "weird" },
      { id: "q3_w10", label: "Recite symbolic flower meanings dramatically", type: "weird" },
    ],
  },

  {
    id: "q4",
    title:
      "While exploring the room, the being suddenly hides in a corner. Why do you think that is?",
    options: [
      {
        id: "q4_plant",
        label: "The lighting direction or brightness felt uncomfortable",
        type: "plant",
      },
      {
        id: "q4_turtle",
        label: "It’s a natural response to a new environment",
        type: "turtle",
      },
      {
        id: "q4_cat",
        label: "It’s seeking a place it feels safe and in control",
        type: "cat",
      },
      {
        id: "q4_dog",
        label: "Your movements or sounds may have felt overwhelming",
        type: "dog",
      },
      {
        id: "q4_rabbit",
        label: "It needs time to calm down after sudden stimulation",
        type: "rabbit",
        isCoreRabbit: true,
      },

      { id: "q4_w1", label: "It sensed an energy portal in the corner", type: "weird" },
      { id: "q4_w2", label: "Your face suddenly looked way too big", type: "weird" },
      { id: "q4_w3", label: "That corner has better Wi-Fi", type: "weird" },
      { id: "q4_w4", label: "It entered stealth observation mode", type: "weird" },
      { id: "q4_w5", label: "It heard something only corners can hear", type: "weird" },
      { id: "q4_w6", label: "It simply prefers the dust there", type: "weird" },
      { id: "q4_w7", label: "It likes the corner more than you", type: "weird" },
      { id: "q4_w8", label: "It temporarily logged out of reality", type: "weird" },
      { id: "q4_w9", label: "Hiding there might trigger a level-up", type: "weird" },
      { id: "q4_w10", label: "It’s negotiating with a dust bunny", type: "weird" },
    ],
  },

  {
    id: "q5",
    title:
      "The being is moving less and barely reacting to food. What is your first response?",
    options: [
      {
        id: "q5_plant",
        label: "Check light, air, and humidity conditions",
        type: "plant",
      },
      {
        id: "q5_turtle",
        label: "Stabilize the temperature and minimize changes",
        type: "turtle",
      },
      {
        id: "q5_cat",
        label: "Remove unfamiliar or stressful stimuli",
        type: "cat",
      },
      {
        id: "q5_dog",
        label: "Gently call out and stay nearby",
        type: "dog",
      },
      {
        id: "q5_rabbit",
        label: "Create a dark, quiet space to reduce stress",
        type: "rabbit",
        isCoreRabbit: true,
      },

      { id: "q5_w1", label: "Check for energy-draining ghosts", type: "weird" },
      { id: "q5_w2", label: "Try to check its battery level somehow", type: "weird" },
      { id: "q5_w3", label: "Play music for a mood boost", type: "weird" },
      { id: "q5_w4", label: "Consider rebooting it like a device", type: "weird" },
      { id: "q5_w5", label: "Assume this is a bug that needs reporting", type: "weird" },
      { id: "q5_w6", label: "Shake the food, wondering if a switch is off", type: "weird" },
      { id: "q5_w7", label: "Eat the snack yourself to test it", type: "weird" },
      { id: "q5_w8", label: "Conclude it’s in power-saving mode", type: "weird" },
      { id: "q5_w9", label: "Check your daily fortune just in case", type: "weird" },
      { id: "q5_w10", label: "Ask if it’s an alien submarine", type: "weird" },
    ],
  },

  {
    id: "q6",
    title:
      "A few days later, the being carefully sits next to you. What feeling crosses your mind?",
    options: [
      {
        id: "q6_plant",
        label: "A gentle calm spreading like sunlight",
        type: "plant",
      },
      {
        id: "q6_turtle",
        label: "A quiet sense of trust slowly forming",
        type: "turtle",
      },
      {
        id: "q6_cat",
        label: "A subtle warmth without words",
        type: "cat",
      },
      {
        id: "q6_dog",
        label: "Being moved by the trust it shows",
        type: "dog",
      },
      {
        id: "q6_rabbit",
        label: "A delicate sense of responsibility to protect it",
        type: "rabbit",
        isCoreRabbit: true,
      },

      { id: "q6_w1", label: "Suspicion that it might be controlling you", type: "weird" },
      { id: "q6_w2", label: "Feeling like background music just started", type: "weird" },
      { id: "q6_w3", label: "Realizing you might be an NPC", type: "weird" },
      { id: "q6_w4", label: "Wondering if it’s higher level than you", type: "weird" },
      { id: "q6_w5", label: "Thinking this would get good views online", type: "weird" },
      { id: "q6_w6", label: "Hearing an imaginary documentary narration", type: "weird" },
      { id: "q6_w7", label: "A sudden, oddly commercial realization about pets", type: "weird" },
      { id: "q6_w8", label: "Expecting a quest window to appear", type: "weird" },
      { id: "q6_w9", label: "Craving comfort food out of nowhere", type: "weird" },
      { id: "q6_w10", label: "Briefly imagining a romantic storyline", type: "weird" },
    ],
  },

  {
    id: "q7",
    title:
      "The being now relies on you. How will you care for it going forward?",
    options: [
      {
        id: "q7_plant",
        label: "Live quietly together, keeping a steady rhythm",
        type: "plant",
      },
      {
        id: "q7_turtle",
        label: "Maintain a stable environment with responsibility",
        type: "turtle",
      },
      {
        id: "q7_cat",
        label: "Respect each other’s space and grow closer slowly",
        type: "cat",
      },
      {
        id: "q7_dog",
        label: "Share daily life with affection and interaction",
        type: "dog",
      },
      {
        id: "q7_rabbit",
        label: "Care attentively, listening even to subtle changes",
        type: "rabbit",
        isCoreRabbit: true,
      },

      { id: "q7_w1", label: "Plan world domination together", type: "weird" },
      { id: "q7_w2", label: "Start a shared video channel", type: "weird" },
      { id: "q7_w3", label: "Turn your relationship into a long documentary", type: "weird" },
      { id: "q7_w4", label: "Imagine charging it rent", type: "weird" },
      { id: "q7_w5", label: "Just coexist with mild indifference", type: "weird" },
      { id: "q7_w6", label: "Conclude it’s smarter than humans", type: "weird" },
      { id: "q7_w7", label: "Wait for a secret organization to recruit you both", type: "weird" },
      { id: "q7_w8", label: "Occasionally cook noodles together as a team", type: "weird" },
      { id: "q7_w9", label: "Consider starting a business together", type: "weird" },
      { id: "q7_w10", label: "Feel like it’s actually raising you", type: "weird" },
    ],
  },
];
