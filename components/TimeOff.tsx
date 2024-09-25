import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { History, Mountain, FileClock, Plus, Clock, PiggyBank, ChevronDownIcon } from "lucide-react"

function TimeOffCard({ title, days, scheduled, policy, icon, additionalText, hasAdditionalTextBelow }: { 
  title: string; 
  days: number; 
  scheduled?: number; 
  policy?: string; 
  icon: React.ReactNode; 
  additionalText?: string; 
  hasAdditionalTextBelow?: boolean 
}) {
  return (
    <Card className="bg-gray-50 border-none shadow-none">
      <CardContent className="pt-6 flex flex-col items-center text-center">
        <h3 className="font-semibold text-4xl mb-4 ">{title}</h3>
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <p className="text-4xl font-semibold">{days}</p>
        </div>
        <p className="text-2sm font-semibold mb-0">
          {title === "Comp/in Lieu Time" ? "Human Used(YTD)" : "Days Available"}
        </p>
        {hasAdditionalTextBelow && <p className="text-2sm font-semibold text-custom-gray mt-2">{additionalText}</p>}
      </CardContent>
    </Card>
  )
}

function UpcomingTimeOff() {
  return (
    <Card className="bg-white border-none shadow-none mt-6">
      <CardContent>
        <ul className="space-y-4 mt-6">
          <li className="flex items-center">
            <Plus className="w-8 h-8 mr-2" />
            <div className="flex flex-col items-start">
            <p className="font-semibold">Jan 27</p>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-2"></span>
              <p className="text-sm">1 day of Sick</p>
            </div>
          </div>
          </li>
        </ul>
      </CardContent>
      <hr className="mb-4 border-2 border-gray-300" />
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-center mt-6">
            <PiggyBank className="w-8 h-8" />
            <div className="pl-2">
              <p className="font-semibold">Jul 4</p>
              <p className="text-sm">Independence Day</p>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

function TimeOffHistory() {
  return (
    <Card className="bg-white border-none shadow-none mt-6">
      <CardHeader>
        <div className="flex items-center">
          <History className="w-5 h-5 text-gray-500 mr-2" />
          <CardTitle>History</CardTitle>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Select defaultValue="sick">
            <SelectTrigger className="w-[180px] rounded-lg border-custom-gray">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sick">Sick</SelectItem>
              <SelectItem value="annual">Annual Leave</SelectItem>
              <SelectItem value="comp">Comp/in Lieu Time</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] rounded-lg border-custom-gray">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="balance">
            <SelectTrigger className="w-[180px] rounded-lg border-custom-gray ml-auto">
              <SelectValue placeholder="Balance History" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="balance">Balance History</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-medium flex items-center">
                  Date
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead className="font-medium">Description</TableHead>
                <TableHead className="font-medium">Used Days (-)</TableHead>
                <TableHead className="font-medium">Earned Days (+)</TableHead>
                <TableHead className="font-medium">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b-2">
                <TableCell>23/05/2024</TableCell>
                <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
                <TableCell></TableCell>
                <TableCell>3.00</TableCell>
                <TableCell>3.00</TableCell>
              </TableRow>
              <TableRow className="border-b-2">
                <TableCell>23/05/2024</TableCell>
                <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
                <TableCell>-6</TableCell>
                <TableCell></TableCell>
                <TableCell>3.00</TableCell>
              </TableRow>
              <TableRow className="border-b-2">
                <TableCell>23/05/2024</TableCell>
                <TableCell>Accrual for 23/05/2024 to 20/11/2024</TableCell>
                <TableCell></TableCell>
                <TableCell>3.00</TableCell>
                <TableCell>3.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export function TimeOffContent() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FileClock className="w-4 h-4 text-gray-500 mr-2" />
          <h2 className="text-xl font-medium">Time Off</h2>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-medium mr-4">
            Accrual Level Start Date <span className="text-blue-500">03/09-2020</span>
          </p>
          <Button variant="outline" className="text-sm font-medium rounded-lg border-black shadow-none">Add Time Off Policy</Button>
        </div>
      </div>
      <hr className="my-2 border-2 border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <TimeOffCard 
          title="Sick" 
          days={3} 
          icon={<Plus className="w-12 h-12" />}
          additionalText="1 day scheduled"
          hasAdditionalTextBelow={true}
        />
        <TimeOffCard 
          title="Annual Leave" 
          days={10.3} 
          icon={<Mountain className="w-12 h-12" />}
        />
        <TimeOffCard 
          title="Comp/in Lieu Time" 
          days={0} 
          icon={<FileClock className="w-12 h-12" />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        <div className="flex justify-center">
          <p className="text-2sm font-medium text-custom-gray">Sick Full-Time</p>
        </div>
        <div className="flex justify-center">
          <p className="text-2sm font-medium text-custom-gray">Holiday Full-Time</p>
        </div>
        <div className="flex justify-center">
          <p className="text-2sm font-medium text-custom-gray">Comp/in Lieu Time Flexible Policy</p>
        </div>
      </div>
      <div className="flex items-center my-4">
        <Clock className="w-4 h-4 text-gray-500 mr-2" />
        <h2 className="text-lg font-semibold text-gray-700">Upcoming Time Off</h2>
      </div>
      <hr className="my-4 border-2 border-gray-300" />
      <UpcomingTimeOff />
      <hr className="mb-4 border-2 border-gray-300" />
      <TimeOffHistory />
    </div>
  )
}