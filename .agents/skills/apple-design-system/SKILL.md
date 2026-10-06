---
name: apple-design-system
description: Apple Human Interface Guidelines (HIG) and SwiftUI visual mastery for iOS, iPadOS, and macOS apps in Xcode. Use whenever building, styling, or refactoring SwiftUI interfaces, widgets, animations, or layouts.
---

# Apple Design System & SwiftUI Craftsmanship

Expert guidelines to create apps that feel natively crafted by Apple’s internal design team.

---

## 1. Core Principles of Apple HIG

1. **Continuous Curves:** Never use standard circular corner radii when possible. Always specify `RoundedRectangle(cornerRadius: 16, style: .continuous)`.
2. **Materials & Depth:** Replace flat solid colors with native background materials that adapt automatically to light/dark modes and user wallpaper:
   - `.background(.ultraThinMaterial)`
   - `.background(.regularMaterial)`
3. **SF Symbols Integration:** Always leverage Apple's native SF Symbols with hierarchical or multicolor rendering:
   ```swift
   Image(systemName: "heart.fill")
       .symbolRenderingMode(.hierarchical)
       .foregroundStyle(.tint)
   ```
4. **Dynamic Type & Typography:** Use semantic text styles (`.font(.title2.weight(.semibold))`, `.font(.subheadline)`) so typography scales gracefully with accessibility settings.

---

## 2. Elite SwiftUI Component Patterns

### Modern Glassmorphic Card with Haptics and Snappy Motion
```swift
import SwiftUI

struct PremiumCardView: View {
    let title: String
    let subtitle: String
    let icon: String
    
    @State private var isPressed = false
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Image(systemName: icon)
                    .font(.title3)
                    .symbolRenderingMode(.hierarchical)
                    .foregroundStyle(.tint)
                    .frame(width: 38, height: 38)
                    .background(.tint.opacity(0.12), in: Circle())
                
                Spacer()
                
                Image(systemName: "chevron.right")
                    .font(.subheadline.weight(.semibold))
                    .foregroundStyle(.tertiary)
            }
            
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.headline)
                    .foregroundStyle(.primary)
                
                Text(subtitle)
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
                    .lineLimit(2)
            }
        }
        .padding(18)
        .background {
            RoundedRectangle(cornerRadius: 22, style: .continuous)
                .fill(.regularMaterial)
                .overlay {
                    RoundedRectangle(cornerRadius: 22, style: .continuous)
                        .strokeBorder(.white.opacity(0.15), lineWidth: 1)
                }
                .shadow(color: .black.opacity(0.06), radius: 12, x: 0, y: 6)
        }
        .scaleEffect(isPressed ? 0.97 : 1.0)
        .animation(.snappy(duration: 0.25, bounce: 0.15), value: isPressed)
        .sensoryFeedback(.impact(weight: .light), trigger: isPressed)
        .simultaneousGesture(
            DragGesture(minimumDistance: 0)
                .onChanged { _ in isPressed = true }
                .onEnded { _ in isPressed = false }
        )
    }
}
```

---

## 3. Native Navigation & Sheets
- Use `NavigationStack` with `.navigationTitle()` and dynamic `.toolbar`.
- Use `.sheet(isPresented:)` with presentation detents:
  ```swift
  .presentationDetents([.fraction(0.35), .medium, .large])
  .presentationDragIndicator(.visible)
  .presentationCornerRadius(28)
  ```
- Use safe area insets deliberately with `.contentMargins()` and `.ignoresSafeArea()`.
