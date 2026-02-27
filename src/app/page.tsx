import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
    return (
        <div className="p-8 pb-24">
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Mobile PWA</h1>
                <p className="text-muted-foreground">
                    Official mobile application for the Society of Asian Scientists and Engineers.
                </p>
            </header>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Getting Started</CardTitle>
                        <CardDescription>Follow these steps to set up your app.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-sm font-mono bg-muted p-3 rounded-md break-all">
                            1. Add credentials to .env.local<br />
                            2. Run npm run dev<br />
                            3. Test PWA locally
                        </p>
                        <div className="pt-4">
                            <Button className="w-full">Explore Docs</Button>
                        </div>
                    </CardContent>
                </Card>

                <section>
                    <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            "Next.js 15",
                            "Tailwind CSS 4",
                            "Supabase",
                            "shadcn/ui",
                            "PWA Manifest",
                            "Service Worker",
                        ].map((item) => (
                            <div
                                key={item}
                                className="bg-secondary/50 border border-border p-3 rounded-lg text-sm font-medium"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
