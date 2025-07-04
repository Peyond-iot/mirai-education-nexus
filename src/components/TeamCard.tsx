
import { Card, CardContent } from '@/components/ui/card';

interface TeamMember {
  name: string;
  position: string;
  qualification: string;
  experience: string;
  image?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-6 text-center">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">
            {member.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-2">{member.position}</p>
        <p className="text-sm text-gray-600 mb-2">{member.qualification}</p>
        <p className="text-sm text-gray-500">{member.experience}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span className="bg-blue-50 px-2 py-1 rounded">Expert</span>
            <span className="bg-green-50 px-2 py-1 rounded">Certified</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
