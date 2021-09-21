## exercise#10

We’re going to build an audio editor for editing wave (.wav) files. We’re planning to ship this application with a bunch of standard filters that users can apply on their audio files, such as:

- Noise reduction
- Reverb-Normalize 

We want other developers to be able to create new filters in the form of plugins that can be imported into our application.  


Look at visitor/WavFile class.
- What are the problems with this implementation? 
- Can the visitor pattern solve these problems? Why? 
- Refactor the code and apply the visitor pattern.

`WavFile`:

```
package com.codewithmosh.visitor;

import java.util.ArrayList;
import java.util.List;

public class WavFile {
    private List<Segment> segments = new ArrayList<>();

    public static WavFile read(String fileName) {
        // Simulate reading a wav file and building the segments
        var wavFile = new WavFile();
        wavFile.segments.add(new FormatSegment());
        wavFile.segments.add(new FactSegment());
        wavFile.segments.add(new FactSegment());
        wavFile.segments.add(new FactSegment());

        return wavFile;
    }

    public void reduceNoise() {
        for (var segment : segments)
            segment.reduceNoise();
    }

    public void addReverb() {
        for (var segment : segments)
            segment.addReverb();
    }

    public void normalize() {
        for (var segment : segments)
            segment.normalize();
    }
}

```

`Segment`:

```
package com.codewithmosh.visitor;

public class Segment {
    public void reduceNoise() {
        System.out.println("Reduce noise");
    }

    public void addReverb() {
        System.out.println("Add reverb");
    }

    public void normalize() {
        System.out.println("Normalize");
    }
}

```

`FormatSegment`:

```
package com.codewithmosh.visitor;

public class FormatSegment extends Segment {
}

```



`FactSegment`:

```
package com.codewithmosh.visitor;

public class FactSegment extends Segment {
}

```