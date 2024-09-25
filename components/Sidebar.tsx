import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Linkedin, Facebook, Twitter, Hash, Clock, Users, Globe, MapPin, CircleUser } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-full md:w-64 space-y-4 z-10 -mt-4 ml-16">
      <Card className="bg-white pt-6">
        <CardContent className="space-y-2">
          <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> 07911 654321</p>
          <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> avd.yana@videoonline.net</p>
          <div className="flex space-x-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Hire Date</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sep. 3 2020</p>
          <p>3y - 9m - 20d</p>
        </CardContent>
      </Card>

      <Card className="bg-white pt-6">
        <CardContent>
          <p className="flex items-center"><Hash className="w-4 h-4 mr-2" /> 5</p>
          <p className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Full-Time</p>
          <p className="flex items-center"><Users className="w-4 h-4 mr-2" /> Operations</p>
          <p className="flex items-center"><Globe className="w-4 h-4 mr-2" /> Europe</p>
          <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> London, UK</p>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Direct Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center"><CircleUser className="w-4 h-4 mr-2" /> Shane</li>
            <li className="flex items-center"><CircleUser className="w-4 h-4 mr-2" /> Nathan</li>
            <li className="flex items-center"><CircleUser className="w-4 h-4 mr-2" /> Mitchell</li>
            <li className="flex items-center"><CircleUser className="w-4 h-4 mr-2" /> Philip</li>
            <li className="flex items-center"><Users className="w-4 h-4 mr-2" /> 4 More...</li>
          </ul>
        </CardContent>
      </Card>
    </aside>
  )
}