import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.9.24"
    id("java-gradle-plugin")
    id("com.google.gms.google-services") version "4.4.2" apply false  // ✅ Correct
    id("com.android.application")
}

repositories {
    mavenCentral()
    google()  // 🔹 Ensure Google's repository is included
}

gradlePlugin {
    plugins {
        create("reactSettingsPlugin") {
            id = "com.facebook.react.settings"
            implementationClass = "expo.plugins.ReactSettingsPlugin"
        }
    }
}

dependencies {
    implementation(platform("com.google.firebase:firebase-bom:33.9.0"))
    implementation("com.google.firebase:firebase-analytics")
}
