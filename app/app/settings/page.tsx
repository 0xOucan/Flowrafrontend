import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Shield, Wallet, Globe } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Settings tabs */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">
            <User className="w-4 h-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="wallet">
            <Wallet className="w-4 h-4 mr-2" />
            Wallet
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="preferences">
            <Globe className="w-4 h-4 mr-2" />
            Preferences
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4">
          <Card className="glass-panel p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Profile Information</h2>
              <p className="text-sm text-muted-foreground">Update your profile details</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="flowra_user" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="user@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Tell us about yourself" />
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
          </Card>
        </TabsContent>

        {/* Wallet Tab */}
        <TabsContent value="wallet" className="space-y-4">
          <Card className="glass-panel p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Connected Wallet</h2>
              <p className="text-sm text-muted-foreground">Manage your EVM wallet connection</p>
            </div>

            <div className="glass-panel rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-semibold">MetaMask</p>
                  <p className="text-sm text-muted-foreground font-mono">0x7xKp...9mL2</p>
                </div>
                <Badge className="bg-green-500/20 text-green-500 border-green-500/50">Connected</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full bg-transparent">
                Change Wallet
              </Button>
              <Button variant="destructive" className="w-full">
                Disconnect Wallet
              </Button>
            </div>
          </Card>

          <Card className="glass-panel p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Auto-Approve Settings</h2>
              <p className="text-sm text-muted-foreground">Configure automatic transaction approvals</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Auto-approve DCA purchases</p>
                  <p className="text-sm text-muted-foreground">Automatically approve scheduled DCA transactions</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Auto-approve Aave supply</p>
                  <p className="text-sm text-muted-foreground">Automatically supply purchased tokens to Aave v3</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card className="glass-panel p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Notification Preferences</h2>
              <p className="text-sm text-muted-foreground">Choose what notifications you want to receive</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">DCA Execution</p>
                  <p className="text-sm text-muted-foreground">Notify when DCA purchases are executed</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Yield Updates</p>
                  <p className="text-sm text-muted-foreground">Weekly summary of yield earned</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Impact Reports</p>
                  <p className="text-sm text-muted-foreground">Monthly reports on your environmental impact</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Project Updates</p>
                  <p className="text-sm text-muted-foreground">Updates from projects you support</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">News and updates from Flowra</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4">
          <Card className="glass-panel p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Security Settings</h2>
              <p className="text-sm text-muted-foreground">Protect your account and assets</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Transaction Limits</p>
                  <p className="text-sm text-muted-foreground">Set maximum transaction amounts</p>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Session Timeout</p>
                  <p className="text-sm text-muted-foreground">Auto-disconnect after inactivity</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          <Card className="glass-panel p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Active Sessions</h2>
              <p className="text-sm text-muted-foreground">Manage your active sessions</p>
            </div>

            <div className="glass-panel rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Current Session</p>
                  <p className="text-sm text-muted-foreground">Chrome on macOS • San Francisco, CA</p>
                </div>
                <Badge className="bg-green-500/20 text-green-500 border-green-500/50">Active</Badge>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-4">
          <Card className="glass-panel p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Display Preferences</h2>
              <p className="text-sm text-muted-foreground">Customize your experience</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Currency Display</Label>
                <select className="w-full h-10 rounded-lg border border-border bg-background px-3">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Language</Label>
                <select className="w-full h-10 rounded-lg border border-border bg-background px-3">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Compact Mode</p>
                  <p className="text-sm text-muted-foreground">Show more information in less space</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Animations</p>
                  <p className="text-sm text-muted-foreground">Enable interface animations</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90">Save Preferences</Button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
