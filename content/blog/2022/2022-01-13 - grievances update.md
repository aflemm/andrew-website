---
title: "Fun With Festivus Grievances"
date: 2022-02-01
type: "post"
draft: true
typora-root-url: ../../../static
typora-copy-images-to: ../../../static/images/blog/2022
---

I've been noodling on my app [Festivus Grievances](tk) lately as a sort of relaxation/meditation exercise. It's been super fun and I've made something I'm actually really quite proud of.

Some back-story: the function of the app is to log the things that make you mad at everyone in your life all year, so you can air your grievances at Festivus Dinner on December 23.



### In App Purchase



### Notifications



### Sharing Cards

Inline `code` looks like this. A block of code looks like this:

```swift
var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: 10.0)
                .foregroundColor(colorScheme == .dark ? darkColour : lightColour)
                .hueRotation(Angle(degrees: backgroundHueRotation))
                
            VStack(alignment: .leading) {
                Text("I have a problem with")
                    .font(.system(size: 18, weight: .light, design: .default))
                
                Text(person)
                    .font(.system(size: 32, weight: .heavy, design: .default))
                                
                Spacer(minLength: 0)
                
                Text(problem)
                    .font(.system(size: 18, weight: .regular, design: .serif))
                
                Spacer(minLength: 0)
                
                HStack {
                    Spacer()
                  
                    Text(anger)
                        .font(.largeTitle)
                  
                    Spacer()
                }
                                
                Spacer(minLength: 0)
                
                HStack {
                    Spacer()
                  
                    Text("Happy Festivus!")
                        .font(.system(size: 18, weight: .light, design: .default))
                }
            }
            .padding(.all)
        }
        .frame(width: 300, height: 300)
    }
```

