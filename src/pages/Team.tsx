
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Binary, Database } from 'lucide-react';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Data Scientist', initials: 'AJ' },
  { name: 'Sarah Wilson', role: 'Full Stack Developer', initials: 'SW' },
  { name: 'Mike Chen', role: 'ML Engineer', initials: 'MC' },
  { name: 'Emma Davis', role: 'Backend Developer', initials: 'ED' },
];

const techStack = [
  { name: 'Python', icon: Binary, description: 'Machine Learning & Data Analysis' },
  { name: 'TypeScript', icon: Code2, description: 'Frontend Development' },
  { name: 'Data Science', icon: Database, description: 'Analytics & Predictions' },
];

const Team = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tech Stack */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-agriculture mb-6">Our Tech Stack</h2>
            <div className="space-y-4">
              {techStack.map((tech) => (
                <Card key={tech.name} className="transition-all hover:shadow-lg dark:bg-slate-800/50">
                  <CardContent className="flex items-center gap-4 p-6">
                    <tech.icon className="h-8 w-8 text-agriculture" />
                    <div>
                      <h3 className="font-semibold">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-agriculture mb-6">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.name} className="transition-all hover:shadow-lg dark:bg-slate-800/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-12 w-12 bg-agriculture text-white">
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
