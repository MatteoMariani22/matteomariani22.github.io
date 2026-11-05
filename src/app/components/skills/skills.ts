import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  readonly skillIcons = [
    { name: 'Adobe', icon: '/assets/skills/adobe.svg' },
    { name: 'Android Studio', icon: '/assets/skills/android-studio.svg' },
    { name: 'Android', icon: '/assets/skills/android.svg' },
    { name: 'Angular', icon: '/assets/skills/angular.svg' },
    { name: 'App Store', icon: '/assets/skills/app-store.svg' },
    { name: 'Apple', icon: '/assets/skills/apple.svg' },
    { name: 'Atlassian', icon: '/assets/skills/atlassian.svg' },
    { name: 'Bash', icon: '/assets/skills/bash.svg' },
    { name: 'Capacitor', icon: '/assets/skills/capacitor.svg' },
    { name: 'Cordova', icon: '/assets/skills/cordova.svg' },
    { name: 'CSS', icon: '/assets/skills/css.svg' },
    { name: 'Dart', icon: '/assets/skills/dart.svg' },
    { name: 'Figma', icon: '/assets/skills/figma.svg' },
    { name: 'Firebase', icon: '/assets/skills/firebase.svg' },
    { name: 'Flutter', icon: '/assets/skills/flutter.svg' },
    { name: 'Git', icon: '/assets/skills/git.svg' },
    { name: 'GitHub', icon: '/assets/skills/github.svg' },
    { name: 'Google Play', icon: '/assets/skills/google-play.svg' },
    { name: 'Google', icon: '/assets/skills/google.svg' },
    { name: 'HTML', icon: '/assets/skills/html.svg' },
    { name: 'Ionic', icon: '/assets/skills/ionic.svg' },
    { name: 'iOS', icon: '/assets/skills/ios.svg' },
    { name: 'JavaScript', icon: '/assets/skills/javascript.svg' },
    { name: 'TypeScript', icon: '/assets/skills/typescript.svg' },
    { name: 'VS Code', icon: '/assets/skills/vs-code.svg' },
    { name: 'Xcode', icon: '/assets/skills/x-code.svg' }
  ];

  readonly technicalSkills = [
    {
      title: 'Mobile',
      skills: [
        'Dart', 'Flutter', 'Swift', 'iOS & Android (Release/Store)', 'Ionic', 'Cordova', 'Capacitor',
        'Biometric Authentication', 'Secure Storage', 'Deeplinking', 'Push Notifications', 'Anti-Tampering',
        'SSL Pinning', 'Jailbreak & Root Detection'
      ]
    },
    {
      title: 'Frontend',
      skills: ['Javascript Vanilla', 'Angular (v2-18)', 'TypeScript', 'JavaScript', 'HTML5', 'CSS/SCSS']
    },
    {
      title: 'Architecture & State Management',
      skills: ['BLoC', 'Clean Architecture', 'Provider', 'REST', 'APIs']
    },
    {
      title: 'Tool & DevOps',
      skills: ['Git', 'Bitrise (CI/CD)', 'Firebase', 'AppStore Connect', 'Google Play Console']
    },
    {
      title: 'Others',
      skills: ['Bash', 'Jira (Agile/Scrum)', 'Figma', 'SauceLabs']
    }
  ];

  readonly softSkills = [
    {
      title: 'Mobile',
      skills: [
        'Technical Architecture', 'Secure Data Storage', 'Data-at-Rest Encryption', 'Product Development Issue Management',
        'IT Risk Management', 'Quality Management', 'Data Management', 'Systems Integration', 'Pipeline Development & Integration',
        'CI/CD with GitLab', 'Microservices Management', 'Mobile Testing', 'Code Obfuscation', 'Performance Optimization',
        'Certificate Pinning', 'Application Design', 'Root and Jailbreak Detection', 'Biometric Systems Integration',
        'Project Guidelines Development', 'Usability Guidelines Implementation', 'Accessibility Guidelines Implementation',
        'iOS SwiftUI', 'Android Views', 'Application UX/UI Definition', 'Apple App Store Management',
        'Apple Certificate Creation & Management', 'Google Play Console Management', 'Google Play Store Management'
      ]
    },
    {
      title: 'Frontend',
      skills: [
        'Technical Architecture', 'Secure Data Storage', 'Data-at-Rest Encryption', 'CI/CD with GitLab',
        'Microservices Management', 'REST APIs', 'Jenkins Integration', 'Performance Optimization',
        'Usability Guidelines Implementation', 'Accessibility Guidelines Implementation'
      ]
    },
    {
      title: 'Management',
      skills: [
        'Technical Architecture Design', 'Team Goal Management', 'Development Issue Management', 'IT Risk Management',
        'Quality Management', 'Project Resource Management', 'Data Management', 'GitHub Actions',
        'Agile Methodology (Kanban/Scrum)', 'Mentoring', 'Client Negotiation', 'Strategic Planning',
        'Decision-Making Processes', 'Application Design', 'Security Oversight', 'Project Guidelines Development',
        'Team Building', 'Team Member Evaluation'
      ]
    }
  ];
}
